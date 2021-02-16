import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  loader: any;
  svg: any;
  path: any;
  g: any;

  width: number;
  height: number;
  outer_width: number;
  outer_height: number;
  margin: any = { top: 500, right: 100, bottom: 100, left: 100 };

  constructor() {
    this.outer_width = 1000;
    this.outer_height = 1000;
    this.width = this.outer_width - this.margin.left - this.margin.right;
    this.height = this.outer_height - this.margin.bottom - this.margin.top;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    d3.xml('assets/gear1.svg')
      .then((data: XMLDocument) => {
        let paths = data.getElementsByTagName("path");
        let elements = Array.from(paths);
        let newPath = elements[0];

        this.initSvg(newPath);
        //this.animateGear();
      });
  }

  initSvg(path: SVGPathElement) {

    this.svg = d3.select("div#loader")
      .append("svg")
      //.attr("width", this.outer_width)
      //.attr("height", this.outer_height)
      .attr("viewBox", `0 0 ${this.outer_width} ${this.outer_height}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      //.attr("display", "block");
      //.classed("svg-content", true)

    this.g = this.svg.append("g")
      .attr("transform", `translate(${this.margin.left},${this.margin.top})`);


    this.g.append("path")
      .attr("d", "m482.197802,203.032774l-20.310626,0c-16.569195,0 -30.465939,-14.2113 -30.465939,-31.078917c0,-8.500217 3.607809,-16.203538 10.02169,-21.914621l13.095009,-12.750325c12.961386,-12.750325 12.961386,-33.602419 0,-46.352744l-29.797826,-29.352311c-5.879392,-5.843899 -14.564857,-9.297112 -23.383944,-9.297112c-8.819088,0 -17.37093,3.453213 -23.383944,9.297112l-12.560519,12.484693c-6.013014,6.640794 -14.030367,10.226823 -22.715832,10.226823c-17.103685,0 -31.401297,-13.812852 -31.401297,-30.149206l0,-20.32083c0,-17.930145 -14.564857,-33.336787 -32.737522,-33.336787l-40.621252,0c-18.172665,0 -32.6039,15.273827 -32.6039,33.336787l0,20.188015c0,16.336354 -14.297612,30.149206 -31.401297,30.149206c-8.551842,0 -16.435572,-3.586029 -22.181341,-9.828376l-12.961386,-12.750325c-5.879392,-5.976715 -14.564857,-9.297112 -23.383944,-9.297112s-17.37093,3.453213 -23.383944,9.297112l-30.065071,29.219495c-12.827764,12.750325 -12.827764,33.602419 0,46.219928l12.560519,12.484693c6.681127,5.976715 10.422558,13.945668 10.422558,22.445885c0,17.000433 -13.896744,31.078917 -30.465939,31.078917l-20.310626,0c-18.306288,0 -33.67288,14.2113 -33.67288,32.27426l0,20.188015l0,20.188015c0,17.930145 15.366592,32.27426 33.67288,32.27426l20.310626,0c16.569195,0 30.465939,14.2113 30.465939,31.078917c0,8.500217 -3.741431,16.46917 -10.422558,22.445885l-12.560519,12.351877c-12.827764,12.750325 -12.827764,33.602419 0,46.219928l29.797826,29.485127c5.879392,5.976715 14.564857,9.297112 23.383944,9.297112c8.819088,0 17.37093,-3.453213 23.383944,-9.297112l12.961386,-12.750325c5.612147,-6.242347 13.629499,-9.828376 22.181341,-9.828376c17.103685,0 31.401297,13.812852 31.401297,30.149206l0,20.188015c0,17.930145 14.431234,33.336787 32.737522,33.336787l40.621252,0c18.172665,0 32.6039,-15.273827 32.6039,-33.336787l0,-20.188015c0,-16.336354 14.297612,-30.149206 31.401297,-30.149206c8.551842,0 16.569195,3.718845 22.715832,10.226823l12.560519,12.484693c6.013014,5.843899 14.564857,9.297112 23.383944,9.297112c8.819088,0 17.37093,-3.453213 23.383944,-9.297112l29.797826,-29.485127c12.827764,-12.750325 12.827764,-33.602419 0,-46.352744l-13.095009,-12.750325c-6.413882,-5.711083 -10.02169,-13.54722 -10.02169,-21.914621c0,-17.000433 13.896744,-31.078917 30.465939,-31.078917l20.310626,0c18.172665,0 31.134052,-14.2113 31.134052,-32.27426l0,-20.32083l0,-20.188015c0.267245,-18.06296 -12.694141,-32.27426 -30.866807,-32.27426zm-117.186967,52.462275l0,0c0,58.571806 -47.703246,106.252708 -106.898031,106.252708c-59.194785,0 -106.898031,-47.680903 -106.898031,-106.252708l0,0l0,0c0,-58.571806 47.703246,-106.252708 106.898031,-106.252708c59.194785,0 106.898031,47.680903 106.898031,106.252708l0,0z");

  }

  animateGear() {
    this.g
      .transition()
      .duration(3000)
      .attr('transform', 'rotate(-180,300,300)')
      .transition()
      .duration(3000)
      .attr('transform', 'rotate(0,300,300)')
      .on("end",() => {this.animateGear();})
  }

}