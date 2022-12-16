export class WeatherForecast {
     date : Date;
     tempratureC : number;
     tempratureF : number;
     summery : string;
     
     constructor(private d : Date, tempc : number, tempf : number, summ : string){
        this.date = d;
        this.tempratureC = tempc;
        this.tempratureF = tempf;
        this.summery = summ;
     }
}
