import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loved',
  templateUrl: './loved.component.html',
  styleUrls: ['./loved.component.scss']
})
export class LovedComponent implements AfterViewInit {
  @ViewChild('imageElement', { static: false })
  imageElement!: ElementRef;

  ngAfterViewInit() {
    this.extractColor();
  }

  extractColor() {
    const image = this.imageElement.nativeElement;

    // Создаем изображение и загружаем изображение в него
    const img = new Image();
    img.src = image.src;

    // Ожидаем загрузки изображения
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const context = canvas.getContext('2d');
      context?.drawImage(img, 0, 0);

      const imageData = context?.getImageData(0, 0, canvas.width, canvas.height);
      const pixelData = imageData?.data;

      // Создаем объект для отслеживания цветов и их частот
      const colorFrequency: { [key: string]: number } = {};

      // Проходим по пикселям и считаем цвета
      if (pixelData != null) {
        for (let i = 0; i < pixelData.length; i += 4) {
          // Извлекаем цвет каждого пикселя (каждый пиксель содержит 4 компоненты: R, G, B, и Alpha)
          var color: string = `rgb(${pixelData[i]}, ${pixelData[i + 1]}, ${pixelData[i + 2]})`;

          // Увеличиваем частоту цвета
          if (color in colorFrequency) {
            colorFrequency[color] += 1;
          } else {
            colorFrequency[color] = 1;
          }
        }
      }

      // Находим самый частый цвет
      let mostFrequentColor = '';
      let maxFrequency = 0;

      for (const color in colorFrequency) {
        if (colorFrequency[color] > maxFrequency) {
          mostFrequentColor = color;
          maxFrequency = colorFrequency[color];
        }
      }

      if (pixelData != null) {
        var darkenedColor = `rgba(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]}, 0.6)`;
        document.documentElement.style.setProperty('--custom-bg-color', darkenedColor);
      }
    }
  };


  /*onScroll($event: Event) {
    const target = $event.target as HTMLElement;
    const scrollPosition = target.scrollTop;
    const actionsElement = document.querySelector('.actions');
    const trackElement = document.querySelector('.track');

    if(scrollPosition >= 300){
      actionsElement?.classList.add('scrolled');
      trackElement?.classList.add('scrolled');
    }
    else {
      actionsElement?.classList.remove('scrolled');
      trackElement?.classList.remove('scrolled');
    }
  }*/

}
