//author by hzhuangchong
//Date on 2019/07/24
//Page in Tabs

describe("Tabs Testing", function () {
  context("Tabs功能测试", function () {
    before(function () {
      cy.visit("#/components/tabs/demo/index");
    });

    it("case #1: 横向不带滚动tabs", function () {
      //点击顺序包括，点击相邻tab、跨越点击，点左侧和右侧的tab
      var indexData = [3, 4, 2, 1, 5];
      for (let i = 0; i < indexData.length; i++) {
        //0 1 2 3 4
        let index = indexData[i]; //3 4 2 1 5
        let tabIndex = -1;
        if (i == 0 || (i > 0 && indexData[i] >= indexData[i - 1]))
          tabIndex = index - 2; //1 2 3
        else tabIndex = index - 1; //1 0
        ((index, tabIndex) => {
          cy.get(".ossa-tabs-header__scroll")
            .eq(1)
            .within(() => {
              cy.get(".ossa-tabs-item").eq(tabIndex).click(); //1 2 1 0 3
            });
          //这样写，可以验证active的tab页下，content是否正确
          cy.get(".ossa-tabs-panel.ossa-tabs-panel--active")
            .eq(1)
            .within(() => {
              cy.get(".tabs__content").contains(
                "标签" +
                  (index == 2 || index == 1 ? index : index - 1) +
                  "内容区域"
              ); //
            });
        })(index, tabIndex);
      }
    });

    it("case #2: 横向带滚动.ossa-tabs", function () {
      var indexData = [3, 4, 10, 9, 1, 6, 7, 5, 8, 2];
      //点击前active的tab在当前tab前面，tabIndex = index - 2，
      //点击前active的tab在当前tab后面，tabIndex = index - 1，
      for (let i = 0; i < indexData.length; i++) {
        let index = indexData[i];
        let tabIndex = -1;
        if (i == 0 || (i > 0 && indexData[i] >= indexData[i - 1]))
          tabIndex = index - 2;
        else tabIndex = index - 1;
        ((index, tabIndex) => {
          cy.get(".ossa-tabs-header__scroll")
            .eq(3)
            .within(() => {
              cy.get(".ossa-tabs-item").eq(tabIndex).click();
            });

          cy.get(".ossa-tabs-panel.ossa-tabs-panel--active")
            .eq(3)
            .within(() => {
              cy.get(".tabs__content").contains(
                "标签" +
                  (index == 9 || index == 1 || index == 5 || index == 2
                    ? index
                    : index - 1) +
                  "内容区域"
              );
            });
        })(index, tabIndex);
      }
    });

    it("case #3: 竖向带滚动.ossa-tabs", function () {
      var indexData = [
        3, 4, 10, 9, 6, 7, 8, 2, 11, 12, 13, 1, 15, 17, 5, 19, 18, 16,
      ];
      //点击前active的tab在当前tab前面，tabIndex = index - 2，
      //点击前active的tab在当前tab后面，tabIndex = index - 1，
      for (let i = 0; i < indexData.length; i++) {
        let index = indexData[i];
        let tabIndex = -1;
        if (i == 0 || (i > 0 && indexData[i] >= indexData[i - 1]))
          tabIndex = index - 2;
        else tabIndex = index - 1;

        ((index, tabIndex) => {
          cy.get(".ossa-tabs-header__scroll")
            .eq(4)
            .within(() => {
              cy.get(".ossa-tabs-item").eq(tabIndex).click();
            });

          cy.get(".ossa-tabs-panel.ossa-tabs-panel--active")
            .eq(4)
            .within(() => {
              cy.get(".tabs__content").contains(
                "标签" +
                  (index == 9 ||
                  index == 1 ||
                  index == 5 ||
                  index == 6 ||
                  index == 2 ||
                  index == 18 ||
                  index == 16
                    ? index
                    : index - 1) +
                  "内容区域"
              );
            });
        })(index, tabIndex);
      }
    });

    it("case #4: 带.ossa-icon的.ossa-tabs", function () {
      var indexData = [2, 5, 1, 4, 3];
      //点击前active的tab在当前tab前面，tabIndex = index - 2，
      //点击前active的tab在当前tab后面，tabIndex = index - 1，
      for (let i = 0; i < indexData.length; i++) {
        let index = indexData[i];
        let tabIndex = -1;
        if (i == 0 || (i > 0 && indexData[i] >= indexData[i - 1]))
          tabIndex = index - 2;
        else tabIndex = index - 1;

        ((index, tabIndex) => {
          cy.get(".ossa-tabs-header__scroll")
            .eq(4)
            .within(() => {
              cy.get(".ossa-tabs-item").eq(tabIndex).click();
            });

          cy.get(".ossa-tabs-panel.ossa-tabs-panel--active")
            .eq(4)
            .within(() => {
              cy.get(".tabs__content").contains(
                "标签" +
                  (index == 1 || index == 3 ? index : index - 1) +
                  "内容区域"
              );
            });
        })(index, tabIndex);
      }
    });
  });

  context("Tabs样式测试", function () {
    before(function () {
      cy.visit("#/components/tabs/demo/index");
    });

    it("case #1: 横向tab的选中下划线", function () {
      cy.get(".ossa-tabs-header__scroll")
        .eq(1)
        .within(() => {
          cy.get(".ossa-tabs-item__underline").should(($underline) => {
            const width = parseFloat($underline.css("width"));
            // expect(width).to.be.closeTo(375 / 5, 1);
            const height = parseFloat($underline.css("border-bottom-width"));
            expect(height).to.be.closeTo(4 / 2, 1);
            expect($underline).to.have.css("color").eq("rgb(221, 26, 33)");
          });
        });
    });

    it("case #2: 横向超长tab的选中下划线", function () {
      cy.get(".ossa-tabs-header__scroll")
        .eq(2)
        .within(() => {
          cy.get(".ossa-tabs-item__underline").should(($underline) => {
            const width = parseFloat($underline.css("width"));
            // expect(width).to.be.closeTo(157, 1);
            const height = parseFloat($underline.css("border-bottom-width"));
            expect(height).to.be.closeTo(4 / 2, 1);
            expect(height).to.be.closeTo(4 / 2, 1);
            expect($underline).to.have.css("color").eq("rgb(221, 26, 33)");
          });
        });
    });

    it("case #3: 竖状tab的选中下划线", function () {
      cy.get(".ossa-tabs-header__scroll")
        .eq(3)
        .within(() => {
          cy.get(".ossa-tabs-item__underline").should(($underline) => {
            expect($underline).to.have.css("color").eq("rgb(221, 26, 33)");
          });
        });
    });

    it("case #4: 带.ossa-icon的tab的选中下划线", function () {
      cy.get(".ossa-tabs-header__scroll")
        .eq(5)
        .within(() => {
          cy.get(".ossa-tabs-item__underline").should(($underline) => {
            const height = parseFloat($underline.css("border-bottom-width"));
            expect(height).to.be.closeTo(4 / 2, 1);
            expect(height).to.be.closeTo(4 / 2, 1);
            expect($underline).to.have.css("color").eq("rgb(221, 26, 33)");
          });
        });
    });
  });
});
