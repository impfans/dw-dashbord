declare interface IMenu {
  /**
   * 索引
   */
  key: string;
  /**
   * 名称
   */
  title: string;
  /**
   * 未选中图标
   */
  icon: string;
  /**
   * 选中图标
   */
  selectIcon: string;
  /**
   * 跳转地址
   */
  path: string;
}
