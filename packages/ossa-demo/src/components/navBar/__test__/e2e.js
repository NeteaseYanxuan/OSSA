//author by hzhuangchong
//Date on 2019/07/24
//Page in Navbar

describe("Navbar Testing", function () {
  //矩形类测试用例
  context("Navbar Normal Testing", function () {
    before(function () {
      cy.visit("#/components/navbar/demo/index");
    });

    it("case #1: 基础导航栏", function () {
      cy.get(".block")
        .eq(0)
        .within(() => {
          cy.get(
            ".ossa-navbar.ossa-navbar--3column.ossa-navbar--show-split-line"
          )
            .eq(0)
            .within(() => {
              cy.get(".ossa-navbar--left")
                .eq(0)
                .within(($bar) => {
                  const partWidth = $bar.width();
                  const width = $bar.parent().width();
                  // // expect(partWidth).to.be.closeTo(width/3, 1)
                  cy.get(".ossa-icon.ossa-icon--return").should("be.exist");
                });
              cy.get(".ossa-navbar--middle")
                .eq(0)
                .within(($bar) => {
                  const partWidth = $bar.width();
                  const width = $bar.parent().width();
                  // // expect(partWidth).to.be.closeTo(width/3, 1)
                  cy.get(".ossa-navbar__title").should("be.exist");
                });
              cy.get(".ossa-navbar--right")
                .eq(0)
                .within(($bar) => {
                  const partWidth = $bar.width();
                  const width = $bar.parent().width();
                  // // expect(partWidth).to.be.closeTo(width/3, 1)
                  cy.get(".ossa-navbar__rightTxts").should("be.exist");
                });
            });
        });
    });

    it("case #2: 自定义标题栏", function () {
      cy.get(".block")
        .eq(1)
        .within(() => {
          cy.get(
            ".ossa-navbar.ossa-navbar--3column.ossa-navbar--show-split-line"
          )
            .eq(0)
            .within(() => {
              cy.get(".ossa-navbar--middle")
                .eq(0)
                .within(($bar) => {
                  expect($bar).to.contain.text("首页");
                  cy.get(".ossa-icon--home").should("be.exist");
                });
            });
        });
    });

    it("case #3: 左侧定制的导航栏", function () {
      cy.get(".block")
        .eq(2)
        .within(() => {
          cy.get(
            ".ossa-navbar.ossa-navbar--3column.ossa-navbar--show-split-line"
          )
            .eq(0)
            .within(() => {
              cy.get(".ossa-navbar--left")
                .eq(0)
                .within(($bar) => {
                  const partWidth = $bar.width();
                  const width = $bar.parent().width();
                  // expect(partWidth).to.be.closeTo(width/3, 1)
                  cy.get(".ossa-icon.ossa-icon--return").should("be.exist");
                  cy.get(".ossa-navbar__leftTxts").should("be.exist");
                });
              cy.get(".ossa-navbar--middle")
                .eq(0)
                .within(($bar) => {
                  const partWidth = $bar.width();
                  const width = $bar.parent().width();
                  // expect(partWidth).to.be.closeTo(width/3, 1)
                  cy.get(".ossa-navbar__title").should("be.exist");
                });
              cy.get(".ossa-navbar--right")
                .eq(0)
                .within(($bar) => {
                  const partWidth = $bar.width();
                  const width = $bar.parent().width();
                  // expect(partWidth).to.be.closeTo(width/3, 1)
                  cy.get(".ossa-navbar__rightTxts").should("be.exist");
                });
            });
        });
    });

    it("case #4: 右侧定制的导航栏", function () {
      cy.get(".block")
        .eq(3)
        .within(() => {
          cy.get(
            ".ossa-navbar.ossa-navbar--3column.ossa-navbar--show-split-line"
          )
            .eq(0)
            .within(() => {
              cy.get(".ossa-navbar--left")
                .eq(0)
                .within(($bar) => {
                  const partWidth = $bar.width();
                  const width = $bar.parent().width();
                  // expect(partWidth).to.be.closeTo(width/3, 1)
                  cy.get(".ossa-navbar__leftIcons").should("be.exist");
                });
              cy.get(".ossa-navbar--middle")
                .eq(0)
                .within(($bar) => {
                  const partWidth = $bar.width();
                  const width = $bar.parent().width();
                  // expect(partWidth).to.be.closeTo(width/3, 1)
                  cy.get(".ossa-navbar__title").should("be.exist");
                });
              cy.get(".ossa-navbar--right")
                .eq(0)
                .within(($bar) => {
                  const partWidth = $bar.width();
                  const width = $bar.parent().width();
                  // expect(partWidth).to.be.closeTo(width/3, 1)
                  cy.get(".ossa-navbar__rightIcons").should("be.exist");
                });
            });
        });
    });

    it("case #5: 2列均分的导航栏", function () {
      cy.get(".block")
        .eq(4)
        .within(() => {
          cy.get(
            ".ossa-navbar.ossa-navbar--2column.ossa-navbar--show-split-line"
          )
            .eq(0)
            .within(() => {
              cy.get(".ossa-navbar--left")
                .eq(0)
                .within(($bar) => {
                  const partWidth = $bar.width();
                  const width = $bar.parent().width();
                  expect(partWidth).to.be.closeTo(width / 2, 1);
                  // cy.get('.ossa-navbar__title').should('be.exist')
                });
              cy.get(".ossa-navbar--right")
                .eq(0)
                .within(($bar) => {
                  const partWidth = $bar.width();
                  const width = $bar.parent().width();
                  expect(partWidth).to.be.closeTo(width / 2, 1);
                  cy.get(".ossa-navbar__rightTxts").should("be.exist");
                });
            });
        });
    });

    it("case #6: 自定义的导航栏", function () {
      cy.get(".block")
        .eq(5)
        .within(() => {
          cy.get(".ossa-navbar.ossa-navbar--custom")
            .eq(0)
            .within(() => {
              cy.get(".navbar--left")
                .eq(0)
                .within(($bar) => {
                  cy.get(".ossa-icon.ossa-icon--return").should("be.exist");
                });
              cy.get(".navbar--middle")
                .eq(0)
                .within(($bar) => {
                  cy.get(".ossa-search").should("be.exist");
                });
              cy.get(".navbar--right")
                .eq(0)
                .within(($bar) => {
                  cy.get(".ossa-badge.ossa-badge--info").should("be.exist");
                });
            });
        });
    });
  });
});
