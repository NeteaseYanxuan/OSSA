/// <reference types="Cypress" />

//author by hzxuxinya
//Date on 2019/07/05
//Page in Button

//require('mocha-allure-reporter')

describe("Button Testing", function () {
  //按钮普通状态测试用例
  context("Button Normal Testing", function () {
    before(function () {
      // 进入Button页
      cy.visit("#/components/button/demo/index");
    });

    it("solution #1: 线框按钮-color", function () {
      cy
        //.task('setSeverity',{severity:a})
        .get(".ossa-button.ossa-button--normal.ossa-button--default")
        .eq(0)
        .should(($button) => {
          //按钮文字颜色
          expect($button).to.have.css("color").eq("rgb(51, 51, 51)");
          //按钮背景色
          expect($button)
            .to.have.css("background-color")
            .eq("rgba(0, 0, 0, 0)");
          //按钮边框颜色
          expect($button).to.have.css("border-color").eq("rgb(127, 127, 127)");
          // more info click https://www.npmjs.com/package/cypress-junit
          // or ask for hzxushch
          this.test.timings.consoleErrors = [
            "line 1 of errors",
            "line 2 of errors",
          ];
          this.test.timings.consoleOutputs = [
            "line 1 of errors",
            "line 2 of errors",
          ];
          this.test.timings.attachments = [
            "line 1 of errors",
            "line 2 of errors",
          ];
        });
    });

    it("solution #2: 线框按钮-圆角&宽高&文案", function () {
      cy.get(".ossa-button.ossa-button--normal.ossa-button--default")
        .eq(0)

        .should(($button) => {
          const innerWidth = $button.parents("body").width();

          //圆角检查
          const borderWidth = parseFloat($button.css("border-radius"));
          expect(borderWidth).to.be.closeTo(4 / 2, 1);

          //按钮padding
          const paddingLeft = parseFloat($button.css("padding-left"));
          const paddingTop = parseFloat($button.css("padding-top"));
          expect(paddingLeft).to.be.closeTo(28 / 2, 1);
          expect(paddingTop).to.be.closeTo(0, 1);

          //按钮高度检查
          const height = parseFloat($button.css("height"));
          expect(height).to.be.closeTo(64 / 2, 1);
        })

        .find(".ossa-button__text")
        .should("not.be.empty")
        .and(($span) => {
          expect($span).to.have.length(1);

          //按钮文案&样式
          expect($span).to.contain("线框按钮");
          const className = $span[0].className;
          expect(className).to.match(/button__/);

          //按钮宽度检查
          const textWidth = $span.width();
          const buttonWidthExpect = textWidth + 28;
          const buttonWidthNow = parseFloat($span.parent().css("width"));
          // expect(buttonWidthNow).to.be.closeTo(buttonWidthExpect, 1);
        });
    });

    it("solution #3: 线框按钮-交互", function () {
      cy.get(".ossa-button.ossa-button--normal.ossa-button--default")
        .eq(0)
        .should(($button) => {
          //hover鼠标样式检查
          expect($button).to.have.css("cursor").eq("pointer");
        });
    });

    it("solution #4: 色块按钮-color", function () {
      cy.get(".ossa-button.ossa-button--normal.ossa-button--primary")
        .eq(0)
        .should(($button) => {
          //按钮文字颜色
          expect($button).to.have.css("color").eq("rgb(255, 255, 255)");
          //按钮背景色
          expect($button)
            .to.have.css("background-color")
            .eq("rgb(221, 26, 33)");
          //按钮边框颜色
          expect($button).to.have.css("border-color").eq("rgb(221, 26, 33)");
        });
    });

    it("solution #5: 色块按钮-圆角&宽高&文案", function () {
      cy.get(".ossa-button.ossa-button--normal.ossa-button--primary")
        .eq(0)
        .should(($button) => {
          const innerWidth = $button.parents("body").width();

          //圆角检查
          const borderWidth = parseFloat($button.css("border-radius"));
          expect(borderWidth).to.be.closeTo(4 / 2, 1);

          //按钮padding
          const paddingLeft = parseFloat($button.css("padding-left"));
          const paddingTop = parseFloat($button.css("padding-top"));
          expect(paddingLeft).to.be.closeTo(28 / 2, 1);
          expect(paddingTop).to.be.closeTo(0, 1);

          //按钮高度检查
          const height = parseFloat($button.css("height"));
          expect(height).to.be.closeTo(64 / 2, 1);
        })

        .find(".ossa-button__text")
        .should("not.be.empty")
        .and(($span) => {
          expect($span).to.have.length(1);

          //按钮文案&样式
          expect($span).to.contain("色块按钮");
          const className = $span[0].className;
          expect(className).to.match(/button__/);

          //按钮宽度检查
          const textWidth = $span.width();
          const buttonWidthExpect = textWidth + 28;
          const buttonWidthNow = parseFloat($span.parent().css("width"));
          // expect(buttonWidthNow).to.be.closeTo(buttonWidthExpect, 1);
        });
    });

    it("solution #6: 色块按钮-交互", function () {
      cy.get(".ossa-button.ossa-button--normal.ossa-button--primary")
        .eq(0)
        .should(($button) => {
          //hover鼠标样式检查
          expect($button).to.have.css("cursor").eq("pointer");
        });
    });

    // it('solution #7: 线框按钮标红-color', function() {
    //   cy
    //     .get('.ossa-button--normal.ossa-button--normal').eq(8)
    //     .should(($button) => {
    //       //按钮文案检查
    //       expect($button).to.contain('自定义字体颜色')
    //       //按钮文字颜色
    //       expect($button).to.have.css('color').eq('rgb(221, 26, 33)')
    //       //按钮背景色(不变)
    //       expect($button).to.have.css('background-color').eq('rgba(0, 0, 0, 0)')
    //       //按钮边框颜色(不变)
    //       expect($button).to.have.css('border-color').eq('rgb(127, 127, 127)')
    //     })

    //   cy
    //     .get('.ossa-button--normal.ossa-button--normal').eq(9)
    //     .should(($button) => {
    //       //按钮文案检查
    //       expect($button).to.contain('自定义边框颜色')
    //       //按钮文字颜色(不变)
    //       expect($button).to.have.css('color').eq('rgb(51, 51, 51)')
    //       //按钮背景色(不变)
    //       expect($button).to.have.css('background-color').eq('rgba(0, 0, 0, 0)')
    //       //按钮边框颜色
    //       expect($button).to.have.css('border-color').eq('rgb(221, 26, 33)')
    //     })
    // })

    it("solution #8: 图标+文字按钮-宽高&文案", function () {
      cy.get(".ossa-button.ossa-button--normal.ossa-button--default")
        .eq(5)
        //按钮高度检查
        .should(($button) => {
          const buttonHeight = parseFloat($button.css("height"));
          expect(buttonHeight).to.be.closeTo(64 / 2, 1);
        })

        .find(".ossa-button__text")
        .should("not.be.empty")
        .and(($span) => {
          expect($span).to.have.length(1);

          //按钮文案&样式
          expect($span).to.contain("普通按钮");
          const className = $span[0].className;
          expect(className).to.match(/button__/);

          //按钮宽度检查
          const textWidth = $span.width();
          const buttonWidthExpect =
            textWidth + 28 / 2 + 28 / 2 + 4 / 2 + 40 / 2;
          //const buttonWidthExpect = textWidth + 30 / 2 + 4 / 2 + 40 / 2
          console.log($span.parent().css("width"));
          const buttonWidthNow = parseFloat($span.parent().css("width"));
          expect(buttonWidthNow).to.be.closeTo(buttonWidthExpect, 1);
        });
    });

    it("solution #9: 图标+文字按钮-icon规格", function () {
      cy.get(".ossa-button.ossa-button--normal.ossa-button--default")
        .eq(5)
        .find(".ossa-icon")
        .and(($icon) => {
          expect($icon).to.have.length(1);

          //icon样式
          const className = $icon[0].className;
          expect(className).to.match(/icon--/);

          //icon宽高检查
          const iconWidth = parseFloat($icon.css("width"));
          const iconHight = parseFloat($icon.css("height"));
          expect(iconWidth).to.be.closeTo(40 / 2, 1);
          expect(iconHight).to.be.closeTo(40 / 2, 1);
        });
    });

    it("solution #10: 图标+文字长按钮-宽高&文案", function () {
      cy.get(".ossa-button.ossa-button--block.ossa-button--primary")
        .eq(1)
        //按钮高度检查
        .should(($button) => {
          const buttonHeight = parseFloat($button.css("height"));
          expect(buttonHeight).to.be.closeTo(96 / 2, 1);
        })

        .find(".ossa-button__text")
        .should("not.be.empty")
        .and(($span) => {
          expect($span).to.have.length(1);

          //按钮文案&样式
          expect($span).to.contain("色块按钮");
          const className = $span[0].className;
          expect(className).to.match(/button__/);

          //按钮宽度检查
          const textWidth = $span.width();
          const buttonWidthExpect =
            parseFloat($span.parents("body").css("width")) - 30; //第2个30为demo页面左右边距
          const buttonWidthNow = parseFloat($span.parent().css("width"));
          // expect(buttonWidthNow).to.be.closeTo(buttonWidthExpect, 1);
        });
    });

    it("solution #11: 图标+文字长按钮-icon规格", function () {
      cy.get(".ossa-button--block.ossa-button--primary")
        .eq(1)
        .find(".ossa-icon")
        .and(($icon) => {
          expect($icon).to.have.length(1);

          //icon样式
          const className = $icon[0].className;
          expect(className).to.match(/icon--/);

          //icon宽高检查
          const iconWidth = parseFloat($icon.css("width"));
          const iconHight = parseFloat($icon.css("height"));
          expect(iconWidth).to.be.closeTo(40 / 2, 1);
          expect(iconHight).to.be.closeTo(40 / 2, 1);
        });
    });

    it("solution #12: 两边贴边长按钮-宽度", function () {
      cy.get(".ossa-button--block.ossa-button--primary")
        .eq(1)
        //宽度检查
        .should(($button) => {
          const buttonWidthExpect =
            parseFloat($button.parents("body").css("width")) - 30; //需要减去demo左右边距
          const buttonWidth = parseFloat($button.css("width"));
          // expect(buttonWidth).to.be.closeTo(buttonWidthExpect, 1);
        });
    });

    it("solution #13: 特殊按钮-正常宽高", function () {
      cy.get(".ossa-button--special1")
        .eq(0)
        //高度检查
        .should(($button) => {
          const buttonHeight = parseFloat($button.css("height"));
          expect(buttonHeight).to.be.closeTo(64 / 2, 1);
        })

        .find(".ossa-button__text")
        .should("not.be.empty")
        .and(($span) => {
          expect($span).to.have.length(1);

          //按钮文案&样式
          expect($span).to.contain("特殊按钮");
          const className = $span[0].className;
          expect(className).to.match(/button__/);

          //按钮宽度检查
          const textWidth = $span.width();
          const buttonWidthExpect = textWidth + 24 * 2;
          const buttonWidthNow = parseFloat($span.parent().css("height"));
          expect(buttonWidthNow).to.be.closeTo(buttonWidthExpect, 100);
        });
    });

    // it('solution #14: 特殊按钮-最大宽度', function() {
    //   cy
    //     .get('.ossa-button--special1').eq(0)

    //     .find('span')
    //     .should('not.be.empty')
    //     .and(($span) => {
    //       expect($span).to.have.length(1)
    //       //TODO:按钮宽度检查-无法set值，怎么验证？？？
    //     })
    // })
  });

  //按钮点击状态测试用例
  context("Button Pressed Testing", function () {
    before(function () {
      cy.visit("#/components/button/demo/index"); // 进入Button页
    });

    it("solution #1: 线框按钮-color", function () {
      // cy
      //   .get('.ossa-button.ossa-button--normal.ossa-button--default').eq(0)
      //   // TODO:按钮点击时的class获取不到
      //   .trigger('onmousedown', {force: true})
      //   .should('have.class', 'button--is-active')
      //   .should(($button) => {
      //     console.log('aaaaa!!!!'+$button[0].className)
      //     //按钮文字颜色（无变化）
      //     expect($button).to.have.css('color').eq('rgb(51, 51, 51)')
      //     //按钮背景色（有改变）
      //     expect($button).to.have.css('background-color').eq('rgb(244, 244, 244)')
      //     //按钮边框颜色（无变化）
      //     expect($button).to.have.css('border-color').eq('rgb(127, 127, 127)')
      //   })
    });

    it("solution #2: 色块按钮", function () {});

    it("solution #3: 特殊按钮", function () {});
  });

  //按钮禁用状态测试用例
  context("Button Disable Testing", function () {
    before(function () {
      cy.visit("#/components/button/demo/index"); // 进入Button页
    });

    it("solution #1: 线框按钮-color&样式", function () {
      cy.get(
        ".ossa-button--normal.ossa-button--is-disabled.ossa-button--default"
      ).should(($button) => {
        //这里只是透明度改为0.5，其他不变 2.3.0版本改动
        //按钮文字颜色
        expect($button).to.have.css("color").eq("rgb(51, 51, 51)");
        //按钮背景色
        expect($button).to.have.css("background-color").eq("rgba(0, 0, 0, 0)");
        //按钮边框颜色
        expect($button).to.have.css("border-color").eq("rgb(127, 127, 127)"); //该类型无边框
        //按钮透明度
        expect($button).to.have.css("opacity").eq("0.5");
        //按钮文案&样式
        expect($button).to.contain("线框按钮");
        const className = $button[0].className;
        expect(className).to.match(/-disabled/);
      });
    });

    it("solution #2: 色块按钮-color&样式", function () {
      cy.get(
        ".ossa-button--normal.ossa-button--is-disabled.ossa-button--primary"
      ).should(($button) => {
        //这里只是添加一个背景色为边框钱透明度10%的遮罩，其他不变
        //按钮文字颜色
        expect($button).to.have.css("color").eq("rgb(255, 255, 255)");
        //按钮背景色
        expect($button).to.have.css("background-color").eq("rgb(221, 26, 33)");
        //按钮边框颜色
        expect($button).to.have.css("border-color").eq("rgb(221, 26, 33)");
        //按钮文案&样式
        expect($button).to.contain("色块按钮");
        const className = $button[0].className;
        expect(className).to.match(/-disabled/);
      });
    });

    //特殊按钮无disabled 2.3.0版本改动
    // it('solution #3: 特殊按钮-color&样式', function() {
    //   cy
    //     .get('.ossa-button--is-disabled.ossa-button--special1')
    //     .should(($button) => {
    //       //按钮文字颜色
    //       expect($button).to.have.css('color').eq('rgb(127, 127, 127)')
    //       //按钮背景色
    //       expect($button).to.have.css('background-color').eq('rgba(0, 0, 0, 0)')
    //       //按钮边框颜色
    //       expect($button).to.have.css('border-color').eq('rgb(204, 204, 204)')
    //       //按钮文案&样式
    //       expect($button).to.contain('特殊按钮')
    //       const className = $button[0].className
    //       expect(className).to.match(/-disabled/)
    //     })
    // })
  });
});

//备注：
//1. 与交互对照demo中缺失了...
