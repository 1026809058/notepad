export interface ProjectConfig {
  showSideBar: Boolean;
  isBeforeEach:Boolean;
  header:header;
  sideWindow:sideWindow
}

interface header{
  background:String;
}

interface sideWindow{
  backgroundColor:String;
}
