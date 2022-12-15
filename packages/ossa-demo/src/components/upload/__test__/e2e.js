/// <reference types="Cypress" />

//author by hzxuxinya
//Date on 2019/07/31
//Page in Upload

describe("Upload Testing", function () {
  //上传测试用例
  context("Upload Testing", function () {
    before(function () {
      // 进入Upload页
      cy.visit("#/components/upload/demo/index");
    });

    it("solution #1: 上传-normal样式", function () {
      cy.get(".ossa-upload__btn")
        .eq(0)
        .should(($uploadBtn) => {
          //上传按钮border样式
          expect($uploadBtn.css("border-style")).to.be.eq("dashed");
          expect($uploadBtn.css("border-color")).to.be.eq("rgb(187, 187, 187)");
          const borderWidth = parseFloat($uploadBtn.css("border-width"));
          expect(borderWidth).to.be.closeTo(2 / 2, 1);
        })
        .find("taro-view-core")
        .should(($upladBtnContent) => {
          //包含图片和文字
          expect($upladBtnContent).to.have.length(2);
        });
    });

    //TODO:上传图片
    //   it('solution #2: 上传-功能', function() {
    //     cy.fixture('pic').as('testPic')  // load data from users.json
    //     cy.fixture('test.png').then((test) => {
    //       cy
    //         .get('.taro-img__mode-scaletofill')
    //         .type
    //     })
    // })
  });
});
