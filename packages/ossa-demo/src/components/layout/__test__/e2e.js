/// <reference types="Cypress" />

//author by hzxuxinya
//Date on 2019/07/31
//Page in Layout

describe("Layout Testing", function () {
  //布局测试用例
  context("Layout Testing", function () {
    before(function () {
      // 进入Layout页
      cy.visit("#/components/layout/demo/index");
    });

    it("solution #1: 布局-宽度100%", function () {
      cy.get(".layout").should(($layout) => {
        const bodywidth = $layout.parents(".block").width();
        expect($layout.width()).to.be.eq(bodywidth - 30); //减去demo边距
      });
    });

    it("solution #2: 布局-高度不换行", function () {
      cy.get(".layout").should(($layout) => {
        const layoutHeight = parseFloat($layout.css("height"));
        expect(layoutHeight).to.be.closeTo(70 / 2, 1);
      });
    });

    it("solution #3: 基础布局-样式", function () {
      cy.get(".layout")
        .eq(0)
        .find("taro-view-core")
        .should(($col) => {
          //col属性float
          expect($col.css("float")).to.be.eq("left");
          //col数量验证
          const colNum = $col.length;
          expect(colNum / 2).to.be.eq(2);
          //col宽度验证 ps.为什么这里要closeTo才能通过？？
          const bodywidth = $col.parents(".block__body").width();
          const colWidth = parseFloat($col.css("width"));
          expect(colWidth).to.be.closeTo(bodywidth / 2, 1);
        });
    });

    it("solution #4: 分栏间隔-样式", function () {
      cy.get(".layout")
        .eq(1)
        .find("taro-view-core")
        .should(($col) => {
          //col属性float
          expect($col.css("float")).to.be.eq("left");
          //col数量验证
          const colNum = $col.length;
          expect(colNum / 2).to.be.eq(4);
          //col左右间距一致
          const paddingLeft = parseFloat($col.css("padding-left"));
          const paddingRight = parseFloat($col.css("padding-right"));
          expect(paddingLeft).to.be.eq(paddingRight);
          //col宽度验证
          const bodywidth = $col.parents(".block__body").width();
          const colWidth = parseFloat($col.css("width"));
          expect(colWidth).to.be.closeTo(bodywidth / 4, 1);
        });
    });

    it("solution #5: 对齐布局居左-样式", function () {
      cy.get(".layout--flex.layout--flex--left")
        .find("taro-view-core")
        .should(($col) => {
          //col数量验证
          const colNum = $col.length;
          expect(colNum / 2).to.be.eq(3);
          //col宽度验证
          const bodywidth = $col.parents(".block__body").width();
          const colWidth = parseFloat($col.css("width"));
          expect(colWidth).to.be.closeTo(bodywidth / 4, 1);
        });
    });

    it("solution #6: 对齐布局居中-样式", function () {
      cy.get(".layout--flex.layout--flex--center")
        .should(($layout) => {
          //col样式
          expect($layout.css("justify-content")).to.be.eq("center");
        })
        .find("taro-view-core")
        .should(($col) => {
          //col数量验证
          const colNum = $col.length;
          expect(colNum / 2).to.be.eq(3);
          //col宽度验证
          const bodywidth = $col.parents(".block__body").width();
          const colWidth = parseFloat($col.css("width"));
          expect(colWidth).to.be.closeTo(bodywidth / 4, 1);
        });
    });

    it("solution #7: 对齐布局居右-样式", function () {
      cy.get(".layout--flex.layout--flex--end")
        .should(($layout) => {
          //col样式
          expect($layout.css("justify-content")).to.be.eq("flex-end");
        })
        .find("taro-view-core")
        .should(($col) => {
          //col数量验证
          const colNum = $col.length;
          expect(colNum / 2).to.be.eq(3);
          //col宽度验证
          const bodywidth = $col.parents(".block__body").width();
          const colWidth = parseFloat($col.css("width"));
          expect(colWidth).to.be.closeTo(bodywidth / 4, 1);
          //   //col样式
          //   expect($col.css('justify-content')).to.be.eq('flex-end')
        });
    });

    it("solution #8: 对齐布局between-样式", function () {
      cy.get(".layout--flex.layout--flex--space-between")
        .should(($layout) => {
          //col样式
          expect($layout.css("justify-content")).to.be.eq("space-between");
        })
        .find("taro-view-core")
        .should(($col) => {
          //col数量验证
          const colNum = $col.length;
          expect(colNum / 2).to.be.eq(3);
          //col宽度验证
          const bodywidth = $col.parents(".block__body").width();
          const colWidth = parseFloat($col.css("width"));
          expect(colWidth).to.be.closeTo(bodywidth / 4, 1);
          //col样式
          //expect($col.css('justify-content')).to.be.eq('space-between')
        });
    });

    it("solution #9: 对齐布局around-样式", function () {
      cy.get(".layout--flex.layout--flex--space-around")
        .should(($layout) => {
          //col样式
          expect($layout.css("justify-content")).to.be.eq("space-around");
        })
        .find("taro-view-core")
        .should(($col) => {
          //col数量验证
          const colNum = $col.length;
          expect(colNum / 2).to.be.eq(3);
          //col宽度验证
          const bodywidth = $col.parents(".block__body").width();
          const colWidth = parseFloat($col.css("width"));
          expect(colWidth).to.be.closeTo(bodywidth / 4, 1);
          //col样式
          //expect($col.css('justify-content')).to.be.eq('space-around')
        });
    });

    it("solution #4: 响应式布局-样式", function () {
      cy.get(".layout--responsive")
        .should(($layout) => {
          expect($layout.css("display")).to.be.eq("flex");
        })
        .find("taro-view-core")
        .should(($col) => {
          //col左右间距一致
          const paddingLeft = parseFloat($col.css("padding-left"));
          const paddingRight = parseFloat($col.css("padding-right"));
          expect(paddingLeft).to.be.eq(paddingRight);
        });
    });
  });
});
