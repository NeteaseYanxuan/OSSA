/// <reference types="Cypress" />

//author by hzxuxinya
//Date on 2019/07/29
//Page in Icon

describe("Icon Testing", function () {
  //icon测试用例
  context("Icon Normal Testing", function () {
    before(function () {
      // 进入Icon页
      cy.visit("#/components/icon/demo/index");
    });

    it("solution #1: icon-宽高正方形", function () {
      cy.get(".ossa-icon").should(($icon) => {
        const width = parseFloat($icon.css("width"));
        const height = parseFloat($icon.css("height"));
        expect(width).to.be.eq(height);
      });
    });

    it("solution #2: icon-颜色", function () {
      cy.get(".ossa-icon").should(($icon) => {
        expect($icon).to.have.css("color").eq("rgb(127, 127, 127)");
      });
    });

    //TODO:验证绘画显示正常
  });
});
