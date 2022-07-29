//author by hzhuangchong
//Date on 2019/08/02
//Page in imagePreview

describe("imagePreview Testing", () => {
  //checkbox基础状态测试用例
  context("imagePreview Normal Testing", function () {
    before(function () {
      // 进入imagePreview 页
      cy.visit("#/components/imagePreview/demo/index");
    });

    it("case #1: 图片预览点击查看", function () {
      // 验证初始为非大图预览状态
      cy.get(".ossa-image-preview").should(
        "have.attr",
        "style",
        "display: none;"
      );
      //     点击小图进入大图预览状态
      cy.get(".image-preview--img").within(() => {
        cy.get("img").click();
      });
      cy.get(".ossa-image-preview").within(() => {
        //点击返回按钮
        cy.get(".ossa-image-preview__header").within(() => {
          cy.get(".ossa-image-preview__back").within(() => {
            // cy.get('.ossa-icon.ossa-icon--return').should('have.attr', 'style', '.ossa-color: rgb(255, 255, 255); font-size: 0.8534rem;')
            cy.get(".ossa-icon.ossa-icon--return").click();
          });
        });
      });
      //验证点击后退出大图预览状态
      cy.get(".ossa-image-preview").should(
        "have.attr",
        "style",
        "display: none;"
      );
    });

    it("case #2: 图片预览大图模式下的滑动与查看", function () {
      //点击进入大图模式
      cy.get(".image-preview--img").within(() => {
        cy.get("img").click();
      });
      cy.get(".ossa-image-preview").within(() => {
        //验证大图模式第一图
        cy.get(".ossa-image-preview__header").within(() => {
          //验证顶端index文案
          cy.get(".ossa-image-preview__index").contains("1/5");
        });
        cy.get(".ossa-image-preview__swipe").within(($preview) => {
          const width = parseFloat($preview.parent().css("width"));
          const width2 = parseFloat($preview.css("width"));
          expect(width).to.be.closeTo(width2, 1);
        });

        //左滑、右滑查看其它图片，but 几种方法都not working，待解决。
        //方法1：
        //     .trigger('pointerdown', { which: 1 })
        //     .trigger('pointermove', 'left')
        //     .trigger('pointerup', { force: true })

        //方法2：
        cy.get(".ossa-image-preview__swipe")
          .eq(0)
          .trigger("mousestart", 200, 50)
          .trigger("mousemove", 300, 50)
          .trigger("mouseup", 300, 50);

        //方法3：
        //cy.scrollTo(1000, 100)
        //--------------------------------

        // 点击返回按钮
        cy.get(".ossa-image-preview__header").within(() => {
          cy.get(".ossa-image-preview__back").within(() => {
            // cy.get('.ossa-icon.ossa-icon--return').should('have.attr', 'style', '.ossa-color: rgb(255, 255, 255); font-size: 0.8534rem;')
            cy.get(".ossa-icon.ossa-icon--return").click();
          });
        });
      });
    });
  });
});
