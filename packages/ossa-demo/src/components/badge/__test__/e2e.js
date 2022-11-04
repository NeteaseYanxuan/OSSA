/// <reference types="Cypress" />

//author by hzxuxinya
//Date on 2019/07/14
//Page in Badge

describe("Badge Testing", function () {
  //徽标测试用例
  context("Badge Testing", function () {
    before(function () {
      // 进入Badge页
      cy.visit("#/components/badge/demo/index");
    });

    it("solution #1: dot-样式", function () {
      cy.get(".ossa-badge--dot")
        .should(($badge) => {
          //class样式检查
          const className = $badge[0].className;
          expect(className).to.match(/--dot/);

          //宽高检查
          const badgeWidth = parseFloat($badge.css("width"));
          const badgeHeight = parseFloat($badge.css("height"));
          expect(badgeWidth).to.be.closeTo(40 / 2, 1);
          expect(badgeHeight).to.be.closeTo(40 / 2, 1);
        })

        .get(".ossa-badge__info--dot")
        .and(($badgeDot) => {
          //dot徽标样式检查
          expect($badgeDot).to.have.css("border-radius").eq("50%");
          expect($badgeDot)
            .to.have.css("background-color")
            .eq("rgb(221, 26, 33)");
        });
    });

    it("solution #2: infoText-样式", function () {
      cy.get(".ossa-badge--info")
        .eq(0)
        .should(($badge) => {
          //class样式检查
          const className = $badge[0].className;
          expect(className).to.match(/--info/);

          //宽高检查
          const badgeWidth = parseFloat($badge.css("width"));
          const badgeHeight = parseFloat($badge.css("height"));
          expect(badgeWidth).to.be.closeTo(40 / 2, 1);
          expect(badgeHeight).to.be.closeTo(40 / 2, 1);
        })

        .get(".ossa-badge__info--info")
        .and(($badgeInfo) => {
          //info徽标样式检查
          expect($badgeInfo)
            .to.have.css("background-color")
            .eq("rgb(221, 26, 33)");
        });
    });

    it("solution #3: infoNum-样式", function () {
      cy.get(".ossa-badge--info")
        .eq(1)
        .should(($badge) => {
          //class样式检查
          const className = $badge[0].className;
          expect(className).to.match(/--info/);

          //宽高检查
          const badgeWidth = parseFloat($badge.css("width"));
          const badgeHeight = parseFloat($badge.css("height"));
          expect(badgeWidth).to.be.closeTo(40 / 2, 1);
          expect(badgeHeight).to.be.closeTo(40 / 2, 1);
        })

        .get(".ossa-badge__info--info")
        .and(($badgeNum) => {
          //info-num徽标样式检查
          expect($badgeNum)
            .to.have.css("background-color")
            .eq("rgb(221, 26, 33)");
        });
    });

    it("solution #4 info 为空时隐藏角标", function () {
      cy.get("#hideWhenEmpty>.ossa-badge__info--info").should("have.length", 0);
      cy.get("#hideWhenEmpty>.ossa-badge__info--text").should("have.length", 0);
      cy.get("#hideWhenEmpty>.ossa-badge__info--dot").should("have.length", 0);
    });

    it("solution #5 text-样式", function () {
      cy.get(".ossa-badge--text")
        .get(".ossa-badge__info--text")
        .and(($badgeText) => {
          //text徽标样式检查
          expect($badgeText).to.have.css("border-radius").eq("50%");
          expect($badgeText)
            .to.have.css("background-color")
            .eq("rgb(221, 26, 33)");
        });
    });
  });
});

// 备注：
// 1. 列表带空点demo缺失
// 2. 数字超过99/999，无法验证‘99+/999+’
