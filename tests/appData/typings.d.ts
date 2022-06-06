import * as NW from "nightwatch";

declare module "*.json"{
    const value:any;
    export default value;

}



  declare module "nightwatch" {
    export interface NightwatchCustomAssertions  {
        compareScreenshot(this: NW.NightwatchBrowser, filename: string, expected: number, callback: Function): any;
    }

    export interface NightwatchCustomCommands  {
      wplogin(this: NW.NightwatchBrowser, callback?: Function):this;
      compareScreenshot(this: NW.NightwatchBrowser, filename: string, expected?: number, callback?: Function): any;
    }
  }