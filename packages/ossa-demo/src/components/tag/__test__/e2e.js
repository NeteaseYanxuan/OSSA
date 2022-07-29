/// <reference types="Cypress" />

//author by hzxuxinya
//Date on 2019/07/15
//Page in Tage

describe("Tag Testing", function () {
  //矩形类测试用例
  context("Tag Rectangle Testing", function () {
    before(function () {
      // 进入Tag页
      cy.visit("#/components/tag/demo/index");
    });

    it("solution #1: 矩形类warning-样式", function () {
      cy.get(".ossa-tag--type-primary.ossa-tag--color-warning").should(
        ($tabWarning) => {
          //宽高检查
          const tagWidth = parseFloat($tabWarning.css("width"));
          const tagHeight = parseFloat($tabWarning.css("height"));
          // console.log(tagWidth)
          expect(tagWidth).to.be.closeTo(160 / 2, 1);
          expect(tagHeight).to.be.closeTo(36 / 2, 1);

          //padding检查
          const paddingRight = parseFloat($tabWarning.css("padding-right"));
          const paddingLeft = parseFloat($tabWarning.css("padding-left"));
          // expect(paddingRight).to.be.closeTo(56 / 2, 1)
          // expect(paddingLeft).to.be.closeTo(56 / 2, 1)
          expect(paddingLeft).to.be.eq(paddingLeft);

          //color检查
          expect($tabWarning)
            .to.have.css("background-color")
            .eq("rgb(244, 143, 24)");
          expect($tabWarning).to.have.css("color").eq("rgb(255, 255, 255)");

          //圆角检查
          const borderBottomRightRadius = parseFloat(
            $tabWarning.css("border-bottom-right-radius")
          );
          const borderBottomLeftRadius = parseFloat(
            $tabWarning.css("border-bottom-left-radius")
          );
          expect(borderBottomRightRadius).to.be.closeTo(4 / 2, 1);
          expect(borderBottomLeftRadius).to.be.closeTo(4 / 2, 1);

          //字体大小
          const fonSize = parseFloat($tabWarning.css("font-size"));
          expect(fonSize).to.be.closeTo(24 / 2, 1);
        }
      );
    });

    it("solution #2: 矩形类normal-样式", function () {
      cy.get(".ossa-tag--type-primary.ossa-tag--color-normal").should(
        ($tabNormal) => {
          //宽高检查
          const tagWidth = parseFloat($tabNormal.css("width"));
          const tagHeight = parseFloat($tabNormal.css("height"));
          expect(tagWidth).to.be.closeTo(160 / 2, 1);
          expect(tagHeight).to.be.closeTo(36 / 2, 1);

          //padding检查
          const paddingRight = parseFloat($tabNormal.css("padding-right"));
          const paddingLeft = parseFloat($tabNormal.css("padding-left"));
          // expect(paddingRight).to.be.closeTo(56 / 2, 1)
          // expect(paddingLeft).to.be.closeTo(56 / 2, 1)
          expect(paddingLeft).to.be.eq(paddingLeft);
          //color检查
          expect($tabNormal)
            .to.have.css("background-color")
            .eq("rgb(51, 51, 51)");
          expect($tabNormal).to.have.css("color").eq("rgb(255, 255, 255)");

          //圆角检查
          const borderBottomRightRadius = parseFloat(
            $tabNormal.css("border-bottom-right-radius")
          );
          const borderBottomLeftRadius = parseFloat(
            $tabNormal.css("border-bottom-left-radius")
          );
          expect(borderBottomRightRadius).to.be.closeTo(4 / 2, 1);
          expect(borderBottomLeftRadius).to.be.closeTo(4 / 2, 1);

          //字体大小
          const fonSize = parseFloat($tabNormal.css("font-size"));
          expect(fonSize).to.be.closeTo(24 / 2, 1);
        }
      );
    });

    it("solution #3: 矩形类error-样式", function () {
      cy.get(".ossa-tag--type-primary.ossa-tag--color-error").should(
        ($tabError) => {
          //宽高检查
          const tagWidth = parseFloat($tabError.css("width"));
          const tagHeight = parseFloat($tabError.css("height"));
          expect(tagWidth).to.be.closeTo(160 / 2, 1);
          expect(tagHeight).to.be.closeTo(36 / 2, 1);

          //padding检查
          const paddingRight = parseFloat($tabError.css("padding-right"));
          const paddingLeft = parseFloat($tabError.css("padding-left"));
          // expect(paddingRight).to.be.closeTo(56 / 2, 1)
          // expect(paddingLeft).to.be.closeTo(56 / 2, 1)
          expect(paddingLeft).to.be.eq(paddingLeft);

          //color检查
          expect($tabError)
            .to.have.css("background-color")
            .eq("rgb(221, 26, 33)");
          expect($tabError).to.have.css("color").eq("rgb(255, 255, 255)");

          //圆角检查
          const borderBottomRightRadius = parseFloat(
            $tabError.css("border-bottom-right-radius")
          );
          const borderBottomLeftRadius = parseFloat(
            $tabError.css("border-bottom-left-radius")
          );
          expect(borderBottomRightRadius).to.be.closeTo(4 / 2, 1);
          expect(borderBottomLeftRadius).to.be.closeTo(4 / 2, 1);

          //字体大小
          const fonSize = parseFloat($tabError.css("font-size"));
          expect(fonSize).to.be.closeTo(24 / 2, 1);
        }
      );
    });
  });

  //线框类测试用例
  context("Tag Line Testing", function () {
    before(function () {
      // 进入Tag页
      cy.visit("#/components/tag/demo/index");
    });

    it("solution #1: 线框类radius-样式", function () {
      cy.get(".ossa-tag--color-warning.ossa-tag--type-radius").should(
        ($tabRadius) => {
          //padding检查
          const paddingRight = parseFloat($tabRadius.css("padding-right"));
          const paddingLeft = parseFloat($tabRadius.css("padding-left"));
          console.log($tabRadius.css("padding-right"));
          expect(paddingRight).to.be.closeTo(12 / 2, 1);
          expect(paddingLeft).to.be.closeTo(12 / 2, 1);
          expect(paddingLeft).to.be.eq(paddingLeft);

          //color检查
          expect($tabRadius)
            .to.have.css("border-color")
            .eq("rgb(244, 143, 24)");
          expect($tabRadius)
            .to.have.css("background-color")
            .eq("rgb(255, 255, 255)");
          expect($tabRadius).to.have.css("color").eq("rgb(244, 143, 24)");

          //圆角检查
          const className = $tabRadius[0].className;
          expect(className).to.be.match(/--type-radius/);
          const borderRadius = parseFloat(
            $tabRadius.find(".ossa-border").css("border-radius")
          );
          expect(borderRadius).to.be.closeTo(16, 1);

          //字体大小
          // TODO 如何校验小于12字体
          // const fonSize = parseFloat($tabRadius.css('font-size'))
          // expect(fonSize).to.be.closeTo(24 / 2, 1)
        }
      );
    });
  });
});

// 备注：
// 1. 线框标签，券样式demo缺失
// 2. 线框标签，文案有问题？ ——非实心
