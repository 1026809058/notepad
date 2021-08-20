export interface ProjectConfig {
  showSideBar: Boolean;
  showFooter:Boolean;
  isBeforeEach:Boolean;
  header:header;
  sideWindow:sideWindow
  sideBar:sideBar
}

interface header{
  background:String;
}

interface sideWindow{
  backgroundColor:String;
}

interface sideBar{
  background:String;
}
