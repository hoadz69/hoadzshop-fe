declare namespace UnionKey {
  /** http content-type */
  type ContentType = 'application/json' | 'application/x-www-form-urlencoded' | 'multipart/form-data';

  /**
   * Tên của thành phần bố cục
   * - basic  
   * - blank  
   */
  type LayoutComponentType = 'basic' | 'blank';

  /**
   *  
   * - pwd-login:  
   * - code-login: 
   * - register:  
   * - reset-pwd:  
   */
  type LoginModule = 'pwd-login' | 'code-login' | 'register' | 'reset-pwd';

  /**
   *  
   * - vertical:  
   * - horizontal:  
   * - vertical-mix:  
   * - horizontal-mix:  
   */
  type ThemeLayoutMode = 'vertical' | 'horizontal' | 'vertical-mix' | 'horizontal-mix';

  /** 
   *  
   * - wrapper  
   * - content  
   */
  type ThemeScrollMode = 'wrapper' | 'content';

  /**
   *  
   * - chrome:  
   * - button:  
   */
  type ThemeTabMode = 'chrome' | 'button';

  /**
   *  
   * - flex-start:  
   * - center:  
   * - flex-end:  
   */
  type ThemeHorizontalMenuPosition = 'flex-start' | 'center' | 'flex-end';

  /**
   *  
   * - zoom-fade:  
   * - zoom-out:  
   * - fade-slide:  
   * - fade:  
   * - fade-bottom:  
   * - fade-scale:  
   */
  type ThemeAnimateMode = 'zoom-fade' | 'zoom-out' | 'fade-slide' | 'fade' | 'fade-bottom' | 'fade-scale';
}
