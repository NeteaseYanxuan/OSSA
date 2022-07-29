//author by hzhuangchong
//Date on 2019/07/30
//Page in stepper

describe("Stepper Testing", function () {
  //矩形类测试用例
  context("Stepper Normal Testing", function () {
    before(function () {
      // 进入Stepper页
      cy.visit("#/components/stepper/demo/index");
    });

    it("case #1: 基础步进器", function () {
      cy.get(".block")
        .eq(0)
        .within(() => {
          cy.get(".ossa-stepper").within(() => {
            //验证初始情况
            cy.get(
              ".ossa-stepper__bts.ossa-stepper__minus.ossa-stepper__bts--is-readonly"
            ).within(() => {
              cy.get(".ossa-icon.ossa-icon--subtract-disable").should(
                "be.exist"
              );
            });
            cy.get(".ossa-stepper__content").within(() => {
              cy.get(".ossa-stepper__input").should("have.value", "1");
            });
            cy.get(".ossa-stepper__bts.ossa-stepper__plus").within(() => {
              cy.get(".ossa-icon.ossa-icon--add").should("be.exist");
            });
            //点击加号
            cy.get(".ossa-stepper__bts.ossa-stepper__plus").within(() => {
              cy.get(".ossa-icon.ossa-icon--add").click();
            });
            //验证点击加号后的数值
            cy.get(".ossa-stepper__content").within(() => {
              cy.get(".ossa-stepper__input").should("have.value", "2");
            });
            //点击减号
            cy.get(".ossa-stepper__bts.ossa-stepper__minus").within(() => {
              cy.get(".ossa-icon.ossa-icon--subtract").click();
            });
            //验证点击减号后的数值
            cy.get(".ossa-stepper__content").within(() => {
              cy.get(".ossa-stepper__input").should("have.value", "1");
            });
            //直接输入数值
            cy.get(".ossa-stepper__content").within(() => {
              cy.get(".ossa-stepper__input").within(() => {
                cy.get(".weui-input").clear().type("5");
                cy.get(".weui-input").should("have.value", "5");
              });
            });
          });
        });
    });

    it("case #2: 不可点击的步进器", function () {
      cy.get(".block")
        .eq(1)
        .within(() => {
          cy.get(".ossa-stepper").within(() => {
            //验证初始情况
            cy.get(
              ".ossa-stepper__bts.ossa-stepper__minus.ossa-stepper__bts--is-readonly"
            ).within(() => {
              cy.get(".ossa-icon.ossa-icon--subtract-disable").should(
                "be.exist"
              );
            });
            cy.get(
              ".ossa-stepper__content.ossa-stepper__input--is-readonly"
            ).within(() => {
              cy.get(".ossa-stepper__input").should("be.exist");
              //不可编辑
              cy.get("input").should("have.be.disabled", "");
            });
            cy.get(
              ".ossa-stepper__bts.ossa-stepper__plus.ossa-stepper__bts--is-readonly"
            ).within(() => {
              cy.get(".ossa-icon.ossa-icon--add-disable").should("be.exist");
            });
          });
        });
    });

    it("case #3: 数量不可编辑的步进器", function () {
      cy.get(".block")
        .eq(2)
        .within(() => {
          cy.get(".ossa-stepper").within(() => {
            //验证初始情况
            cy.get(
              ".ossa-stepper__bts.ossa-stepper__minus.ossa-stepper__bts--is-readonly.ossa-stepper__bts--is-disabled"
            ).within(() => {
              cy.get(".ossa-icon.ossa-icon--subtract-disable").should(
                "be.exist"
              );
            });
            cy.get(
              ".ossa-stepper__content.ossa-stepper__input--is-disabled"
            ).within(() => {
              cy.get(".ossa-stepper__input").should("be.exist");
              //不可编辑
              cy.get("input").should("have.be.disabled", "");
            });
            cy.get(
              ".ossa-stepper__bts.ossa-stepper__plus.ossa-stepper__bts--is-readonly.ossa-stepper__bts--is-disabled"
            ).within(() => {
              cy.get(".ossa-icon.ossa-icon--add-disable").should("be.exist");
            });
          });
        });
    });

    // it('case #4: 高级用法的步进器', function() {
    //     cy.get('.block').eq(3).within(()=>{
    //         cy.get('.ossa-stepper').within(()=>{
    //             //验证初始情况
    //             cy.get('.ossa-stepper__content').within(()=>{
    //                 cy.get('.ossa-stepper__input').then(text => {
    //                     cy.get('.ossa-stepper__input').should('have.value','2')
    //                 });
    //             })
    //             //点击加号
    //             cy.get('.ossa-stepper__bts.ossa-stepper__plus').within(()=>{
    //                 cy.get('.ossa-icon.ossa-icon--add').click()
    //             })
    //             //验证点击加号后的情况
    //             cy.get('.ossa-stepper__content').within(()=>{
    //                 cy.get('.ossa-stepper__input').then(text => {
    //                     cy.get('.ossa-stepper__input').should('have.value','4')
    //                 });
    //             })
    //             //点击减号
    //             //按钮点击时的class获取不到?
    //             // cy.get('.ossa-icon.ossa-icon--subtract').within(()=>{
    //             //     cy.get('.ossa-icon.ossa-icon--subtract').click()
    //             // })
    //             // //验证点击加号后的情况
    //             // cy.get('.ossa-stepper__content').within(()=>{
    //             //     cy.get('.ossa-stepper__input').then(text => {
    //             //         cy.get('.ossa-stepper__input').should('have.value','2')
    //             //     });
    //             // })
    //         })
    //     })
    // })
  });
});
