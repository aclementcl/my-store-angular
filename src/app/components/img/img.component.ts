import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  img: string = '';
  @Input('img')
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('changes just img =>', this.img);
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imgDefault = './assets/images/default.jpg';
  // counter = 0;
  // counterFn: number | undefined;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
    console.log('changes', changes);
  }

  ngOnInit(): void {
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000);
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

  imgError(){
    this.img =  this.imgDefault;
  }

  imgLoaded(){
    console.log("Log hijo");
    this.loaded.emit(this.img);
  }

}
