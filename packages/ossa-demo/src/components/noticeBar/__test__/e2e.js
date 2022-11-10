//author by hzhuangchong
//Date on 2019/07/30
//Page in noticebar

describe("noticebar Testing", function () {
  //noticeBar基础状态测试用例
  context("Notice Normal Testing", function () {
    before(function () {
      // 进入noticeBar页
      cy.visit("#/components/noticeBar/demo/index");
    });

    it("case #1: 基础通知栏框", function () {
      cy.get(".block")
        .eq(0)
        .within(() => {
          cy.get(".ossa-notice-bar.ossa-notice-bar--with-icon").within(() => {
            cy.get(
              ".ossa-icon.ossa-icon--inform.ossa-notice-bar__left-icon"
            ).should(($icon) => {
              expect($icon).to.have.css("color").eq("rgb(244, 143, 24)");
            });
            cy.get(".ossa-notice-bar__content-wrapper").within(() => {
              cy.get(".ossa-notice-bar__content").contains(
                "你可能已经注意到了，我们使用let关键字来代替var"
              );
            });
          });
        });
    });

    it("case #2: 滚动通知栏框", function () {
      cy.get(".block")
        .eq(1)
        .within(() => {
          cy.get(
            ".ossa-notice-bar.ossa-notice-bar--play-infinite.ossa-notice-bar--with-icon"
          ).within(() => {
            cy.get(
              ".ossa-icon.ossa-icon--inform.ossa-notice-bar__left-icon"
            ).should(($icon) => {
              expect($icon).to.have.css("color").eq("rgb(244, 143, 24)");
            });
            cy.get(".ossa-notice-bar__content-wrapper").within(() => {
              cy.get(".ossa-notice-bar__content").contains(
                "你可能已经注意到了，我们使用let关键字来代替var"
              );
            });
          });
        });
    });

    it("case #3: 自定义一屏滚动时长滚动通知栏框", function () {
      cy.get(".block")
        .eq(2)
        .within(() => {
          cy.get(
            ".ossa-notice-bar.ossa-notice-bar--play-infinite.ossa-notice-bar--with-icon"
          ).within(() => {
            cy.get(
              ".ossa-icon.ossa-icon--inform.ossa-notice-bar__left-icon"
            ).should(($icon) => {
              expect($icon).to.have.css("color").eq("rgb(244, 143, 24)");
            });
            cy.get(".ossa-notice-bar__content-wrapper").within(() => {
              cy.get(".ossa-notice-bar__content").should(($content) => {
                expect($content.attr("style")).contains(
                  "animation-duration: 5s;"
                );
              });
            });
          });
        });
    });

    it("case #4: 可关闭的通知栏框", function () {
      cy.get(".block")
        .eq(3)
        .within(() => {
          cy.get(".ossa-notice-bar").within(() => {
            cy.get(".ossa-notice-bar__content-wrapper").within(() => {
              cy.get(".ossa-notice-bar__content").contains(
                "你可能已经注意到了，我们使用let关键字来代替var"
              );
            });
            cy.get(
              ".ossa-icon.ossa-icon--close.ossa-notice-bar__close-btn"
            ).click();
          });
          cy.get(
            ".ossa-notice-bar.ossa-notice-bar--play-infinite.ossa-notice-bar--with-icon"
          ).should("not.exist");
        });
    });

    it("case #5: 可跳转的通知栏框", function () {
      cy.get(".block")
        .eq(4)
        .within(() => {
          cy.get(".ossa-notice-bar").within(() => {
            cy.get(".ossa-notice-bar__content-wrapper").within(() => {
              cy.get(".ossa-notice-bar__content").contains(
                "你可能已经注意到了，我们使用let关键字来代替var"
              );
            });
            cy.get(
              ".ossa-icon.ossa-icon--arrows.ossa-notice-bar__accessory-view"
            ).should(($notice) => {
              expect($notice).to.have.css("color").eq("rgb(244, 143, 24)");
            });
          });
        });
    });
  });
});
