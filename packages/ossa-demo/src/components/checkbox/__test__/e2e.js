//author by hzhuangchong
//Date on 2019/07/30
//Page in checkbox

describe("Checkbox Testing", function () {
  //checkbox基础状态测试用例
  context("Checkbox Normal Testing", function () {
    before(function () {
      // 进入Checkbox页
      cy.visit("#/components/checkbox/demo/index");
    });

    it("case #1: 基础复选框", function () {
      cy.get(".block")
        .eq(0)
        .within(() => {
          cy.get(".ossa-checkbox__options")
            .eq(0)
            .within(() => {
              cy.get(".ossa-checkbox__option")
                .eq(0)
                .within(() => {
                  cy.get(".ossa-icon.ossa-icon--choose-selected").should(
                    "be.exist"
                  );
                  cy.get(".ossa-icon.ossa-icon--choose").should("not.exist");
                  cy.get(".ossa-checkbox__option-label").contains("选项A");
                });
              cy.get(".ossa-checkbox__option")
                .eq(0)
                .within(() => {
                  cy.get(".ossa-icon.ossa-icon--choose-selected").eq(0).click();
                });
              cy.get(".ossa-checkbox__option")
                .eq(0)
                .within(() => {
                  cy.get(".ossa-icon.ossa-icon--choose-selected").should(
                    "not.exist"
                  );
                  cy.get(".ossa-icon.ossa-icon--choose").should("be.exist");
                  cy.get(".ossa-checkbox__option-label").contains("选项A");
                });
            });

          cy.get(".ossa-checkbox__options")
            .eq(0)
            .within(() => {
              cy.get(".ossa-checkbox__option")
                .eq(1)
                .within(() => {
                  cy.get(".ossa-icon.ossa-icon--choose-selected").should(
                    "not.exist"
                  );
                  cy.get(".ossa-icon.ossa-icon--choose").should("be.exist");
                  cy.get(".ossa-checkbox__option-label").contains("选项B");
                });
              cy.get(".ossa-checkbox__option")
                .eq(1)
                .within(() => {
                  cy.get(".ossa-icon.ossa-icon--choose").eq(0).click();
                });
              cy.get(".ossa-checkbox__option")
                .eq(1)
                .within(() => {
                  cy.get(".ossa-icon.ossa-icon--choose-selected").should(
                    "be.exist"
                  );
                  cy.get(".ossa-icon.ossa-icon--choose").should("not.exist");
                  cy.get(".ossa-checkbox__option-label").contains("选项B");
                });
            });
        });
    });

    it("case #2: 选项内容自定义的复选框", function () {
      cy.get(".block")
        .eq(1)
        .within(() => {
          cy.get(".ossa-checkbox__options")
            .eq(0)
            .within(() => {
              cy.get(
                ".ossa-checkbox__option.ossa-checkbox__option--custom-label"
              )
                .eq(0)
                .within(() => {
                  cy.get(".ossa-icon.ossa-icon--choose-selected").should(
                    "be.exist"
                  );
                  cy.get(".ossa-icon.ossa-icon--choose").should("not.exist");
                  cy.get(".ossa-checkbox__option-label").within(() => {
                    cy.get(".custom-option").within(() => {
                      cy.get(".custom-option__img").should("be.exist");
                      cy.get(".custom-option__content").within(() => {
                        cy.get(".custom-option__title").contains("西装");
                        cy.get(".custom-option__sub-title").contains(
                          "帅气的办公室吸睛装扮"
                        );
                        cy.get(".custom-option__price").contains("￥299");
                      });
                    });
                  });
                });
              cy.get(
                ".ossa-checkbox__option.ossa-checkbox__option--custom-label"
              )
                .eq(0)
                .within(() => {
                  cy.get(".ossa-icon.ossa-icon--choose-selected").eq(0).click();
                });
              cy.get(
                ".ossa-checkbox__option.ossa-checkbox__option--custom-label"
              )
                .eq(0)
                .within(() => {
                  cy.get(".ossa-icon.ossa-icon--choose-selected").should(
                    "not.exist"
                  );
                  cy.get(".ossa-icon.ossa-icon--choose").should("be.exist");
                  cy.get(".custom-option__img").should("be.exist");
                  cy.get(".custom-option__content").within(() => {
                    cy.get(".custom-option__title").contains("西装");
                    cy.get(".custom-option__sub-title").contains(
                      "帅气的办公室吸睛装扮"
                    );
                    cy.get(".custom-option__price").contains("￥299");
                  });
                });
            });

          cy.get(".ossa-checkbox__options")
            .eq(0)
            .within(() => {
              cy.get(
                ".ossa-checkbox__option.ossa-checkbox__option--custom-label"
              )
                .eq(1)
                .within(() => {
                  cy.get(".ossa-icon.ossa-icon--choose-selected").should(
                    "not.exist"
                  );
                  cy.get(".ossa-icon.ossa-icon--choose").should("be.exist");
                  cy.get(".custom-option__img").should("be.exist");
                  cy.get(".custom-option__content").within(() => {
                    cy.get(".custom-option__title").contains(
                      "网易智造四季全屋循环扇"
                    );
                    cy.get(".custom-option__sub-title").contains(
                      "源自日本，全屋空气对流循环"
                    );
                    cy.get(".custom-option__price").contains("￥248.1");
                  });
                });
              cy.get(
                ".ossa-checkbox__option.ossa-checkbox__option--custom-label"
              )
                .eq(1)
                .within(() => {
                  cy.get(".ossa-icon.ossa-icon--choose").eq(0).click();
                });
              cy.get(
                ".ossa-checkbox__option.ossa-checkbox__option--custom-label"
              )
                .eq(1)
                .within(() => {
                  cy.get(".ossa-icon.ossa-icon--choose-selected").should(
                    "be.exist"
                  );
                  cy.get(".ossa-icon.ossa-icon--choose").should("not.exist");
                  cy.get(".custom-option__img").should("be.exist");
                  cy.get(".custom-option__content").within(() => {
                    cy.get(".custom-option__title").contains(
                      "网易智造四季全屋循环扇"
                    );
                    cy.get(".custom-option__sub-title").contains(
                      "源自日本，全屋空气对流循环"
                    );
                    cy.get(".custom-option__price").contains("￥248.1");
                  });
                });
            });
        });
    });

    it("case #3: 禁用复选框", function () {
      cy.get(".block")
        .eq(2)
        .within(() => {
          cy.get(".ossa-checkbox__options")
            .eq(0)
            .within(() => {
              cy.get(".ossa-checkbox__option.ossa-checkbox__option--disabled")
                .eq(0)
                .within(() => {
                  cy.get(".ossa-icon.ossa-icon--choose-disable").should(
                    "be.exist"
                  );
                  cy.get(".ossa-checkbox__option-label").contains("选项A");
                });
              cy.get(".ossa-checkbox__option.ossa-checkbox__option--disabled")
                .eq(0)
                .within(() => {
                  cy.get(".ossa-icon.ossa-icon--choose-disable").eq(0).click();
                });
              cy.get(".ossa-checkbox__option.ossa-checkbox__option--disabled")
                .eq(0)
                .within(() => {
                  cy.get(".ossa-icon.ossa-icon--choose-disable").should(
                    "be.exist"
                  );
                  cy.get(".ossa-checkbox__option-label").contains("选项A");
                });
            });

          cy.get(".ossa-checkbox__options")
            .eq(0)
            .within(() => {
              cy.get(".ossa-checkbox__option.ossa-checkbox__option--disabled")
                .eq(1)
                .within(() => {
                  cy.get(".ossa-icon.ossa-icon--choose-disable").should(
                    "be.exist"
                  );
                  cy.get(".ossa-checkbox__option-label").contains("选项B");
                });
              cy.get(".ossa-checkbox__option.ossa-checkbox__option--disabled")
                .eq(1)
                .within(() => {
                  cy.get(".ossa-icon.ossa-icon--choose-disable").eq(0).click();
                });
              cy.get(".ossa-checkbox__option.ossa-checkbox__option--disabled")
                .eq(1)
                .within(() => {
                  cy.get(".ossa-icon.ossa-icon--choose-disable").should(
                    "be.exist"
                  );
                  cy.get(".ossa-checkbox__option-label").contains("选项B");
                });
            });
        });
    });
  });
});
