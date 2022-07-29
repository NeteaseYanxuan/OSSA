/// <reference types="Cypress" />

//author by hzxuxinya
//Date on 2019/07/28
//Page in List

describe("List Testing", function () {
  //list测试用例
  context("List Testing", function () {
    before(function () {
      // 进入List页
      cy.visit("#/components/list/demo/index");
    });

    it("solution #1: list-基础", function () {
      cy.get(".ossa-list.ossa-list--is-show-split-line")
        .eq(0)
        .should(($listNormal) => {
          //宽高
          const width = parseFloat($listNormal.css("width"));
          const height = parseFloat($listNormal.css("height"));
          expect(width).to.be.closeTo(375, 1);
          expect(height).to.be.closeTo(104 / 2, 1);
          //字号
          const fontSize = parseFloat($listNormal.css("font-size"));
          expect(fontSize).to.be.closeTo(28 / 2, 1);
          //字体颜色
          expect($listNormal).to.have.css("color").eq("rgb(51, 51, 51)");
          //背景色
          // expect($listNormal).to.have.css('background-color').eq('rgb(249, 249, 249)')
          //列表背景色应是 #ffffff
          expect($listNormal)
            .to.have.css("background-color")
            .eq("rgb(255, 255, 255)");
        });
      //TODO：分割线‘:after’未验证
    });

    it("solution #2: list-副标题", function () {
      cy.get(".ossa-list--is-hasSubTitle").should(($list) => {
        //宽高
        const width = parseFloat($list.css("width"));
        const height = parseFloat($list.css("height"));
        expect(width).to.be.closeTo(375, 1);
        expect(height).to.be.closeTo(126 / 2, 1);
        //主标题字号
        const fontSize = parseFloat($list.css("font-size"));
        expect(fontSize).to.be.closeTo(28 / 2, 1);
        //字体颜色
        expect($list).to.have.css("color").eq("rgb(51, 51, 51)");
        //背景色
        expect($list).to.have.css("background-color").eq("rgb(255, 255, 255)");
      });
      cy.get(".ossa-list__subTitle").should(($listSubtitle) => {
        //副标题字号
        const fontSize = parseFloat($listSubtitle.css("font-size"));
        expect(fontSize).to.be.closeTo(24 / 2, 1);
        //字体颜色
        expect($listSubtitle).to.have.css("color").eq("rgb(127, 127, 127)");
        //行高
        const lineHeight = parseFloat($listSubtitle.css("line-height"));
        expect(lineHeight).to.be.closeTo(36 / 2, 1);
      });
    });

    it("solution #3: list-右侧定制&尖角", function () {
      cy.get(".ossa-list--is-hasIcon")
        .eq(1)
        .find("taro-view-core")
        .should(($listBody) => {
          //间距
          const marginRight = parseFloat($listBody.css("margin-right"));
          expect(marginRight).to.be.closeTo(30 / 2, 1);
        });
      cy.get(".ossa-icon--arrows").should(($rightIcon) => {
        //icon宽高
        const width = parseFloat($rightIcon.css("width"));
        const height = parseFloat($rightIcon.css("height"));
        expect(width).to.be.eq(height);
        expect(width).to.be.closeTo(28 / 2, 1);
      });
    });

    it("solution #4: list-右侧定制&文字尖角", function () {
      cy.get(".ossa-list--is-hasIcon.ossa-list--is-hasDesc")
        .find("taro-view-core")
        .should(($listBody) => {
          //间距
          const marginRight = parseFloat($listBody.css("margin-right"));
          expect(marginRight).to.be.closeTo(30 / 2, 1);
        });
      cy.get(".ossa-list__desc")
        .eq(1)
        .should(($listRightText) => {
          //间距
          const marginRight = parseFloat($listRightText.css("margin-right"));
          expect(marginRight).to.be.closeTo(8 / 2, 1);
          //行高
          const lineHeight = parseFloat($listRightText.css("line-height"));
          expect(lineHeight).to.be.closeTo(40 / 2, 1);
          //颜色
          expect($listRightText).to.have.css("color").eq("rgb(127, 127, 127)");
        });
      cy.get(".ossa-icon--arrows").should(($rightIcon) => {
        //icon宽高
        const width = parseFloat($rightIcon.css("width"));
        const height = parseFloat($rightIcon.css("height"));
        expect(width).to.be.eq(height);
        expect(width).to.be.closeTo(28 / 2, 1);
      });
    });

    it("solution #5: list-右侧定制&红点尖角", function () {
      cy.get(
        ".ossa-list--custom.ossa-list--is-hasSubTitle.ossa-list--is-hasIcon"
      )
        .find("taro-view-core")
        .should(($listBody) => {
          //间距
          const marginRight = parseFloat($listBody.css("margin-right"));
          expect(marginRight).to.be.closeTo(30 / 2, 1);
        });
      cy.get(".ossa-badge--list")
        .eq(0)
        .should(($listRightBadge) => {
          //间距
          const marginRight = parseFloat($listRightBadge.css("margin-right"));
          expect(marginRight).to.be.closeTo(16 / 2, 1);
          //颜色
          expect($listRightBadge.children("taro-view-core"))
            .to.have.css("background-color")
            .eq("rgb(221, 26, 33)");
        });
      cy.get(".ossa-icon--arrows").should(($rightIcon) => {
        //icon宽高
        const width = parseFloat($rightIcon.css("width"));
        const height = parseFloat($rightIcon.css("height"));
        expect(width).to.be.eq(height);
        expect(width).to.be.closeTo(28 / 2, 1);
      });
    });

    it("solution #6: list-标题带icon", function () {
      cy.get(".ossa-list--is-hasLeftIcon")
        .eq(0)
        .find("taro-view-core")
        .should(($leftIcon) => {
          //样式
          const className = $leftIcon[0].className;
          expect(className).to.be.match(/__leftIcon/);
          //右间距
          const marginRight = parseFloat($leftIcon.css("margin-right"));
          expect(marginRight).to.be.closeTo(20 / 2, 1);
          //图标宽高
          const width = parseFloat(
            $leftIcon.children("taro-view-core").css("width")
          );
          const height = parseFloat(
            $leftIcon.children("taro-view-core").css("height")
          );
          expect(width).to.be.eq(height);
          expect(width).to.be.closeTo(36 / 2, 1);
        });
    });

    it("solution #7: list-标题带图片", function () {
      cy.get(".ossa-list--is-hasDesc")
        .eq(3)
        .find("taro-image-core")
        .should(($listPic) => {
          //样式
          const className = $listPic[0].className;
          expect(className).to.be.match(/__image/);
          //右间距
          const marginRight = parseFloat($listPic.css("margin-right"));
          expect(marginRight).to.be.closeTo(20 / 2, 1);
          //图标宽高
          const width = parseFloat($listPic.children("img").css("width"));
          const height = parseFloat($listPic.children("img").css("height"));
          expect(width).to.be.eq(height);
          expect(width).to.be.closeTo(160 / 2, 1);
        });
    });
  });
});
