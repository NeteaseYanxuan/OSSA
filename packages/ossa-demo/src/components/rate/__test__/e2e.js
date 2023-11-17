//author by hzhuangchong
//Date on 2019/07/30
//Page in rate

describe("Rate Testing", function () {
  //矩形类测试用例
  context("Rate Normal Testing", function () {
    before(function () {
      // 进入Rate页
      cy.visit("#/components/rate/demo/index");
    });

    it("case #1: 基础评分控件", function () {
      let indexData = ["非常差", "差", "一般吧", "满意", "非常满意"];
      cy.get(".block")
        .eq(0)
        .within(() => {
          cy.get(".ossa-rate.ossa-rate--is-default")
            .eq(0)
            .within(() => {
              for (let i = 0; i < indexData.length; i++) {
                ((i) => {
                  cy.get(".ossa-rate__list")
                    .eq(0)
                    .within(() => {
                      //按序点击各评分按钮
                      cy.get(".ossa-rate__icon").eq(i).click();
                      //验证前面每个星星是否亮起
                      for (let j = 0; j <= i; j++) {
                        ((j) => {
                          cy.get(".ossa-rate__icon")
                            .eq(j)
                            .within(() => {
                              console.log(j);
                              cy.get(
                                ".ossa-icon.ossa-icon--grade-selected"
                              ).should(($icon) => {
                                expect($icon)
                                  .to.have.css("color")
                                  .eq("rgb(250, 182, 70)");
                              });
                            });
                        })(j);
                      }
                      //验证后面几个星星是否没有高亮
                      for (let k = i + 1; k < indexData.length; k++) {
                        ((k) => {
                          cy.get(".ossa-rate__icon")
                            .eq(k)
                            .within(() => {
                              cy.get(".ossa-icon.ossa-icon--grade").should(
                                ($icon) => {
                                  expect($icon)
                                    .to.have.css("color")
                                    .eq("rgb(204, 204, 204)");
                                }
                              );
                            });
                        })(k);
                      }
                    });
                  //验证评分的文案是否正确
                  cy.get(".ossa-rate__txt").contains(indexData[i]);
                })(i);
              }
            });
        });
    });

    it("case #2: 最小评分控件", function () {
      let indexData = ["非常差", "差", "一般吧", "满意", "非常满意"];
      cy.get(".block")
        .eq(1)
        .within(() => {
          cy.get(".ossa-rate.ossa-rate--is-small")
            .eq(0)
            .within(() => {
              for (let i = 0; i < indexData.length; i++) {
                ((i) => {
                  cy.get(".ossa-rate__list")
                    .eq(0)
                    .within(() => {
                      //按序点击各评分按钮
                      cy.get(".ossa-rate__icon").eq(i).click();
                      //验证前面每个星星是否亮起
                      for (let j = 0; j <= i; j++) {
                        ((j) => {
                          cy.get(".ossa-rate__icon")
                            .eq(j)
                            .within(() => {
                              console.log(j);
                              cy.get(
                                ".ossa-icon.ossa-icon--grade-selected"
                              ).should(($icon) => {
                                expect($icon)
                                  .to.have.css("color")
                                  .eq("rgb(250, 182, 70)");
                              });
                            });
                        })(j);
                      }
                      //验证后面几个星星是否没有高亮
                      for (let k = i + 1; k < indexData.length; k++) {
                        ((k) => {
                          cy.get(".ossa-rate__icon")
                            .eq(k)
                            .within(() => {
                              cy.get(".ossa-icon.ossa-icon--grade").should(
                                ($icon) => {
                                  expect($icon)
                                    .to.have.css("color")
                                    .eq("rgb(204, 204, 204)");
                                }
                              );
                            });
                        })(k);
                      }
                    });
                })(i);
              }
            });
        });
    });

    it("case #3: 基础评分控件", function () {
      let rateMax = 5;
      cy.get(".block")
        .eq(2)
        .within(() => {
          cy.get(".ossa-rate.ossa-rate--is-default")
            .eq(0)
            .within(() => {
              for (let i = 0; i < rateMax; i++) {
                ((i) => {
                  cy.get(".ossa-rate__list")
                    .eq(0)
                    .within(() => {
                      //按序点击各评分按钮
                      cy.get(".ossa-rate__icon").eq(i).click();
                      //验证前面每个星星是否亮起
                      for (let j = 0; j <= i; j++) {
                        ((j) => {
                          cy.get(".ossa-rate__icon")
                            .eq(j)
                            .within(() => {
                              cy.get(
                                ".ossa-icon.ossa-icon--like-selected"
                              ).should(($icon) => {
                                expect($icon)
                                  .to.have.css("color")
                                  .eq("rgb(250, 182, 70)");
                              });
                            });
                        })(j);
                      }
                      //验证后面几个星星是否没有高亮
                      for (let k = i + 1; k < rateMax; k++) {
                        ((k) => {
                          cy.get(".ossa-rate__icon")
                            .eq(k)
                            .within(() => {
                              cy.get(".ossa-icon.ossa-icon--like").should(
                                ($icon) => {
                                  expect($icon)
                                    .to.have.css("color")
                                    .eq("rgb(204, 204, 204)");
                                }
                              );
                            });
                        })(k);
                      }
                    });
                  //验证评分的文案是否正确
                  let likeNum = i + 1;
                  cy.get(".ossa-rate__txt").contains(likeNum + "个赞");
                })(i);
              }
            });
        });
    });
  });
});
