/// <reference types="Cypress" />

//author by hzxuxinya
//Date on 2019/07/19
//Page in Radio

describe("Radio Testing", function () {
  //基础状态测试用例
  context("Radio Normal Testing", function () {
    before(function () {
      // 进入Radio页
      cy.visit("#/components/radio/demo/index");
    });

    it("solution #1: radio普通-样式", function () {
      cy.get(".ossa-radio__option")
        .eq(0)
        .should(($radio) => {
          //左间距
          const iconPaddingLeft = parseFloat(
            $radio.parent("taro-view-core").css("padding-left")
          );
          expect(iconPaddingLeft).to.be.closeTo(30 / 2, 1);
        })
        .find("taro-view-core")
        .should(($icon) => {
          //勾选状态样式
          const iconClassName = $icon[0].className;
          expect(iconClassName).to.be.match(/-selected/);
          //icon宽高
          const iconWidth = parseFloat(
            $icon.children("taro-view-core").css("width")
          );
          const iconHeight = parseFloat(
            $icon.children("taro-view-core").css("height")
          );
          expect(iconWidth).to.be.closeTo(36 / 2, 1);
          expect(iconHeight).to.be.closeTo(36 / 2, 1);
        })
        //包含选中对勾元素
        .find("taro-text-core")
        .should(($span) => {
          const num = $span.length;
          expect(num).to.be.eq(4);
        });

      cy.get(".ossa-radio__option-label")
        .eq(0)
        .should(($radioLabel) => {
          //文字左间距
          const labelMarginLeft = parseFloat($radioLabel.css("margin-left"));
          expect(labelMarginLeft).to.be.closeTo(16 / 2, 1);
          //文字行高
          const labelHeight = parseFloat($radioLabel.css("height"));
          expect(labelHeight).to.be.closeTo(40 / 2, 1);
          //文字字号
          const labelFontsize = parseFloat($radioLabel.css("font-size"));
          expect(labelFontsize).to.be.closeTo(28 / 2, 1);
          //文字颜色
          expect($radioLabel.css("color")).to.be.eq("rgb(51, 51, 51)");
        });
      cy.get(".ossa-radio__option")
        .eq(1)
        .find(".ossa-icon--check")
        .should(($icon) => {
          //未勾选状态样式
          const iconClassName = $icon[0].className;
          expect(iconClassName).not.to.be.match(/-selected/);
          //icon宽高
          const iconWidth = parseFloat($icon.css("width"));
          const iconHeight = parseFloat($icon.css("height"));
          expect(iconWidth).to.be.closeTo(36 / 2, 1);
          expect(iconHeight).to.be.closeTo(36 / 2, 1);
        });
    });

    it("solution #2: radio普通-功能", function () {
      //点击选项B
      cy.get(".ossa-radio__option")
        .eq(1)
        .find("taro-view-core")
        .eq(0)
        .click({ multiple: true })
        .should(($iconB) => {
          //勾选状态样式
          const iconClassName = $iconB[0].className;
          expect(iconClassName).to.be.match(/-selected/);
        })
        //包含选中对勾元素
        .find("taro-text-core")
        .should(($span) => {
          const num = $span.length;
          expect(num).to.be.eq(4);
        });
      cy.get(".ossa-radio__option")
        .eq(0)
        .find("taro-view-core")
        .should(($iconA) => {
          //未勾选状态样式
          const iconClassName = $iconA[0].className;
          expect(iconClassName).not.to.be.match(/-selected/);
        })
        //不包含选中对勾元素
        .find("taro-text-core")
        .should(($span) => {
          const num = $span.length;
          expect(num).to.be.eq(0);
        });
    });

    it("solution #3: radio自定义-样式", function () {
      cy.get(".ossa-radio__option")
        .eq(2)
        .should(($radio) => {
          //左间距
          const iconPaddingLeft = parseFloat(
            $radio.parent("taro-view-core").css("padding-left")
          );
          expect(iconPaddingLeft).to.be.closeTo(30 / 2, 1);
        })
        .find("taro-view-core")
        .should(($icon) => {
          //勾选状态样式
          const iconClassName = $icon[0].className;
          expect(iconClassName).to.be.match(/-selected/);
          //icon宽高
          const iconWidth = parseFloat(
            $icon.children("taro-view-core").css("width")
          );
          const iconHeight = parseFloat(
            $icon.children("taro-view-core").css("height")
          );
          expect(iconWidth).to.be.closeTo(36 / 2, 1);
          expect(iconHeight).to.be.closeTo(36 / 2, 1);
        })
        //包含选中对勾元素
        .find("taro-text-core")
        .should(($span) => {
          const num = $span.length;
          expect(num).to.be.eq(4);
        });

      cy.get(".ossa-radio__option-label")
        .eq(2)
        .should(($radioLabel) => {
          //图片左间距
          const labelMarginLeft = parseFloat($radioLabel.css("margin-left"));
          expect(labelMarginLeft).to.be.closeTo(20 / 2, 1);
          //内容行高
          const labelHeight = parseFloat($radioLabel.css("height"));
          expect(labelHeight).to.be.closeTo(172 / 2, 1);
          //文字字号
          const labelFontsize = parseFloat($radioLabel.css("font-size"));
          expect(labelFontsize).to.be.closeTo(28 / 2, 1);
          //文字颜色
          expect($radioLabel.css("color")).to.be.eq("rgb(51, 51, 51)");
        })
        .find("taro-view-core")
        .should(($picDiv) => {
          //图片样式
          const picClassName = $picDiv.children("taro-image-core")[0].className;
          expect(picClassName).to.be.match(/__img/);
        });

      cy.get(".custom-option__img")
        .eq(0)
        .should(($pic) => {
          //图片尺寸
          const picWidth = parseFloat($pic.css("width"));
          const picHeight = parseFloat($pic.css("height"));
          expect(picWidth).to.be.eq(picHeight);
          //expect(picWidth).to.be.closeTo(172, 1)

          //图片链接https
          const picSrc = $pic.children("img")[0].src;
          expect(picSrc).to.be.match(/https:/);
        });
      cy.get(".custom-option__content")
        .eq(0)
        .should(($text) => {
          //文字左间距
          const textMarginLeft = parseFloat($text.css("margin-left"));
          expect(textMarginLeft).to.be.closeTo(20 / 2, 1);
        });

      cy.get(".ossa-radio__option")
        .eq(3)
        .find("taro-view-core")
        .should(($icon) => {
          //未勾选状态样式
          const iconClassName = $icon[0].className;
          expect(iconClassName).not.to.be.match(/-selected/);
          //icon宽高
          const iconWidth = parseFloat($icon.css("width"));
          const iconHeight = parseFloat($icon.css("height"));
          expect(iconWidth).to.be.closeTo(36 / 2, 1);
          expect(iconHeight).to.be.closeTo(36 / 2, 1);
        });
    });

    it("solution #4: radio自定义-功能", function () {
      //点击电风扇
      cy.get(".ossa-radio__option")
        .eq(3)
        .find("taro-view-core")
        .eq(0)
        .click({ multiple: true })
        .should(($iconB) => {
          //勾选状态样式
          const iconClassName = $iconB[0].className;
          expect(iconClassName).to.be.match(/-selected/);
        })
        //包含选中对勾元素
        .find("taro-text-core")
        .should(($span) => {
          const num = $span.length;
          expect(num).to.be.eq(4);
        });
      cy.get(".ossa-radio__option")
        .eq(2)
        .find("taro-view-core")
        .should(($iconA) => {
          //未勾选状态样式
          const iconClassName = $iconA[0].className;
          expect(iconClassName).not.to.be.match(/-selected/);
        })
        //不包含选中对勾元素
        .find("taro-text-core")
        .should(($span) => {
          const num = $span.length;
          expect(num).to.be.eq(0);
        });
    });
  });

  //禁用状态测试用例
  context("Radio Disabled Testing", function () {
    before(function () {
      // 进入Radio页
      cy.visit("#/components/radio/demo/index");
    });

    it("solution #1: radio普通&禁用-功能", function () {
      //点击选项B
      cy.get(".ossa-radio__option")
        .eq(5)
        .find("taro-view-core")
        .eq(0)
        .click({ multiple: true })
        .should(($iconB) => {
          //勾选状态样式
          const iconClassName = $iconB[0].className;
          expect(iconClassName).not.to.be.match(/-selected/);
        })
        //不包含选中对勾元素
        .find("taro-text-core")
        .should(($span) => {
          const num = $span.length;
          expect(num).to.be.eq(0);
        });
      cy.get(".ossa-radio__option")
        .eq(4)
        .find("taro-view-core")
        .should(($iconA) => {
          //未勾选状态样式
          const iconClassName = $iconA[0].className;
          expect(iconClassName).to.be.match(/-selected/);
        })
        //包含选中对勾元素
        .find("taro-text-core")
        .should(($span) => {
          const num = $span.length;
          expect(num).to.be.eq(4);
        });
    });

    it("solution #2: radio自定义&禁用-功能", function () {
      //点击选项B
      cy.get(".ossa-radio__option")
        .eq(7)
        .find("taro-view-core")
        .eq(0)
        .click({ multiple: true })
        .should(($iconB) => {
          //勾选状态样式
          const iconClassName = $iconB[0].className;
          expect(iconClassName).not.to.be.match(/-selected/);
        })
        //不包含选中对勾元素
        .find("taro-text-core")
        .should(($span) => {
          const num = $span.length;
          expect(num).to.be.eq(0);
        });
      cy.get(".ossa-radio__option")
        .eq(6)
        .find("taro-view-core")
        .should(($iconA) => {
          //未勾选状态样式
          const iconClassName = $iconA[0].className;
          expect(iconClassName).to.be.match(/-selected/);
        })
        //包含选中对勾元素
        .find("taro-text-core")
        .should(($span) => {
          const num = $span.length;
          expect(num).to.be.eq(4);
        });
    });
  });

  //不可执行状态测试用例
  context("Radio unExecutable Testing", function () {
    before(function () {
      // 进入Radio页
      cy.visit("#/components/radio/demo/index");
    });

    it("solution #1: radio普通&不可执行状态-功能", function () {
      //点击选项B
      cy.get(".ossa-radio__option")
        .eq(9)
        .find("taro-view-core")
        .eq(0)
        .click({ multiple: true })
        .should(($iconB) => {
          //勾选状态样式
          const iconClassName = $iconB[0].className;
          expect(iconClassName).not.to.be.match(/-irrevocable/);
        })
        //不包含选中对勾元素
        .find("taro-text-core")
        .should(($span) => {
          const num = $span.length;
          expect(num).to.be.eq(0);
        });
      cy.get(".ossa-radio__option")
        .eq(8)
        .find("taro-view-core")
        .should(($iconA) => {
          //未勾选状态样式
          const iconClassName = $iconA[0].className;
          expect(iconClassName).to.be.match(/-irrevocable/);
        })
        //包含选中对勾元素
        .find("taro-text-core")
        .should(($span) => {
          const num = $span.length;
          expect(num).to.be.eq(4);
        });
    });

    it("solution #2: radio自定义&不可执行状态-功能", function () {
      //点击选项B
      cy.get(".ossa-radio__option")
        .eq(11)
        .find("taro-view-core")
        .eq(0)
        .click({ multiple: true })
        .should(($iconB) => {
          //勾选状态样式
          const iconClassName = $iconB[0].className;
          expect(iconClassName).not.to.be.match(/-irrevocable/);
        })
        //不包含选中对勾元素
        .find("taro-text-core")
        .should(($span) => {
          const num = $span.length;
          expect(num).to.be.eq(0);
        });
      cy.get(".ossa-radio__option")
        .eq(10)
        .find("taro-view-core")
        .should(($iconA) => {
          //未勾选状态样式
          const iconClassName = $iconA[0].className;
          expect(iconClassName).to.be.match(/-irrevocable/);
        })
        //包含选中对勾元素
        .find("taro-text-core")
        .should(($span) => {
          const num = $span.length;
          expect(num).to.be.eq(4);
        });
    });
  });
});
