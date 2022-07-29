/// <reference types="Cypress" />

//author by hzxuxinya
//Date on 2019/07/29
//Page in Color

describe("Color Testing", function () {
  //color测试用例
  context("Color Testing", function () {
    before(function () {
      // 进入Color页
      cy.visit("#/components/color/demo/index");
    });

    it("solution #1: color-品牌红色", function () {
      cy.get(".color-item")
        .eq(0)
        .find("taro-view-core")
        .should(($YXColorRed) => {
          //rgb检查
          expect($YXColorRed)
            .to.have.css("background-color")
            .eq("rgb(221, 26, 33)");
        })
        //色值文案检查
        .contains("#DD1A21");
    });

    // it('solution #2: color-桌面图标亮红色', function() {
    //     cy
    //       .get('.color-item').eq(1)
    //       .find('taro-view-core')
    //       .should(($YXColorLogo) => {
    //           //rgb检查
    //           expect($YXColorLogo).to.have.css('background-color').eq('rgb(255, 20, 47)')
    //       })
    //       //色值文案检查
    //       .contains('#ff142f')
    // })

    it("solution #3: color-营销色", function () {
      cy.get(".color-item")
        .eq(1)
        .find("taro-view-core")
        .should(($YXColorYellow) => {
          //rgb检查
          expect($YXColorYellow)
            .to.have.css("background-color")
            .eq("rgb(244, 143, 24)");
        })
        //色值文案检查
        .contains("#F48F18");
    });

    it("solution #4: color-成功状态色", function () {
      cy.get(".color-item")
        .eq(3)
        .find("taro-view-core")
        .should(($YXColorGreen) => {
          //rgb检查
          expect($YXColorGreen)
            .to.have.css("background-color")
            .eq("rgb(43, 171, 82)");
        })
        //色值文案检查
        .contains("#2BAB52");
    });

    it("solution #5: color-主标题字色", function () {
      cy.get(".color-item")
        .eq(4)
        .find("taro-view-core")
        .should(($YXColorBlack) => {
          //rgb检查
          expect($YXColorBlack)
            .to.have.css("background-color")
            .eq("rgb(51, 51, 51)");
        })
        //色值文案检查
        .contains("#333333");
    });

    it("solution #6: color-次要信息字色", function () {
      cy.get(".color-item")
        .eq(5)
        .find("taro-view-core")
        .should(($YXColorGray) => {
          //rgb检查
          expect($YXColorGray)
            .to.have.css("background-color")
            .eq("rgb(127, 127, 127)");
        })
        //色值文案检查
        .contains("#7F7F7F");
    });

    it("solution #7: color-弱信息字色", function () {
      cy.get(".color-item")
        .eq(6)
        .find("taro-view-core")
        .should(($YXColorLightGray) => {
          //rgb检查
          expect($YXColorLightGray)
            .to.have.css("background-color")
            .eq("rgb(153, 153, 153)");
        })
        //色值文案检查
        .contains("#999999");
    });

    it("solution #8: color-不可用状态字色", function () {
      cy.get(".color-item")
        .eq(7)
        .find("taro-view-core")
        .should(($YXColorDisadle) => {
          //rgb检查
          expect($YXColorDisadle)
            .to.have.css("background-color")
            .eq("rgb(204, 204, 204)");
        })
        //色值文案检查
        .contains("#CCCCCC");
    });

    it("solution #9: color-描边、分割线色", function () {
      cy.get(".color-item")
        .eq(8)
        .find("taro-view-core")
        .should(($YXColorLine) => {
          //rgb检查
          expect($YXColorLine)
            .to.have.css("background-color")
            .eq("rgb(217, 217, 217)");
        })
        //色值文案检查
        .contains("#D9D9D9");
    });

    it("solution #10: color-界面背景色", function () {
      cy.get(".color-item")
        .eq(9)
        .find("taro-view-core")
        .should(($YXColorBackground) => {
          //rgb检查
          expect($YXColorBackground)
            .to.have.css("background-color")
            .eq("rgb(244, 244, 244)");
        })
        //色值文案检查
        .contains("#F4F4F4");
    });

    it("solution #11: color-Bar背景色", function () {
      cy.get(".color-item")
        .eq(11)
        .find("taro-view-core")
        .should(($YXColorBar) => {
          //rgb检查
          expect($YXColorBar)
            .to.have.css("background-color")
            .eq("rgb(250, 250, 250)");
        })
        //色值文案检查
        .contains("#FAFAFA");
    });

    // it('solution #12: color-品牌金色', function() {
    //     cy
    //       .get('.color-item').eq(11)
    //       .find('taro-view-core')
    //       .should(($YXColorGolden) => {
    //           //rgb检查
    //           expect($YXColorGolden).to.have.css('background-color').eq('rgb(180, 160, 120)')
    //       })
    //       //色值文案检查
    //       .contains('#B4A078')
    // })

    it("solution #13: 文字链点击color-弱文字链", function () {
      cy.get(".font-item")
        .eq(0)
        .find("taro-view-core")
        .should(($line) => {
          //rgb检查
          expect($line).to.have.css("background-color").eq("rgb(51, 51, 51)");
        })
        //色值文案检查
        .contains("#333333");
    });

    it("solution #14: 文字链点击color-强文字链", function () {
      cy.get(".font-item")
        .eq(1)
        .find("taro-view-core")
        .should(($line) => {
          //rgb检查
          expect($line).to.have.css("background-color").eq("rgb(0, 122, 255)");
        })
        //色值文案检查
        .contains("#007AFF");
    });
  });
});
