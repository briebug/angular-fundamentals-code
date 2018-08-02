import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "ellipses"
})
export class EllipsesPipe implements PipeTransform {
  transform(value: string, length: number): any {
    if (value.length > length) {
      return value.substring(0, length) + "...";
    } else {
      return value;
    }
  }
}
