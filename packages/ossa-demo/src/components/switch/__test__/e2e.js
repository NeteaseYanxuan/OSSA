/// <reference types="Cypress" />

//author by hzxuxinya
//Date on 2019/07/18
//Page in Switch

describe("Switch Testing", function () {
  //基础测试用例
  context("Switch Normal Testing", function () {
    before(function () {
      // 进入Switch页
      cy.visit("#/components/switch/demo/index");
    });

    it("solution #1: switch基础-on", function () {
      cy.get(".block-section")
        .eq(0)
        .find("taro-view-core")
        .should(($switch) => {
          //switch-样式检查
          const switchClassName = $switch[0].className;
          expect(switchClassName).to.be.match(/--checked/);

          //switch-color
          expect($switch)
            .to.have.css("background-color")
            .eq("rgb(68, 219, 94)");
          expect($switch).to.have.css("border-color").eq("rgb(68, 219, 94)");

          //switch-尺寸
          const switchWidth = parseFloat($switch.css("width"));
          expect(switchWidth).to.be.closeTo(88 / 2, 1);
          const switchHeight = parseFloat($switch.css("height"));
          expect(switchHeight).to.be.closeTo(54 / 2, 1);

          //switch__bg-off-样式检查
          const offClassName = $switch[1].className;
          expect(offClassName).to.be.match(/__bg-off/);

          //switch__bg-off-color
          expect($switch[1])
            .to.have.css("background-color")
            .eq("rgb(255, 255, 255)");

          //switch__node-样式检查
          const nodeClassName = $switch[2].className;
          expect(nodeClassName).to.be.match(/__node/);

          //switch__node-color
          expect($switch[2])
            .to.have.css("background-color")
            .eq("rgb(255, 255, 255)");
        });

      //点击验证switch
      cy.get(".ossa-switch")
        .eq(0)
        .click()
        .should(($switch) => {
          const switchClassName = $switch[0].className;
          expect(switchClassName).to.be.match(/switch/);
        });
    });

    it("solution #2: switch基础-off", function () {
      cy.get(".block-section")
        .eq(1)
        .find("taro-view-core")
        .should(($switch) => {
          //switch-样式检查
          const switchClassName = $switch[0].className;
          expect(switchClassName).not.to.be.match(/--checked/);

          //switch-color
          expect($switch)
            .to.have.css("background-color")
            .eq("rgb(223, 223, 223)");
          expect($switch).to.have.css("border-color").eq("rgb(223, 223, 223)");

          //switch-尺寸
          const switchWidth = parseFloat($switch.css("width"));
          expect(switchWidth).to.be.closeTo(88 / 2, 1);
          const switchHeight = parseFloat($switch.css("height"));
          expect(switchHeight).to.be.closeTo(54 / 2, 1);

          //switch__bg-off-样式检查
          const offClassName = $switch[1].className;
          expect(offClassName).to.be.match(/__bg-off/);

          //switch__bg-off-color
          expect($switch[1])
            .to.have.css("background-color")
            .eq("rgb(255, 255, 255)");

          //switch__node-样式检查
          const nodeClassName = $switch[2].className;
          expect(nodeClassName).to.be.match(/__node/);

          //switch__node-color
          expect($switch[2])
            .to.have.css("background-color")
            .eq("rgb(255, 255, 255)");
        });

      //点击验证switch
      cy.get(".ossa-switch")
        .eq(1)
        .click()
        .should(($switch) => {
          const switchClassName = $switch[0].className;
          expect(switchClassName).to.be.match(/--checked/);
        });
    });
  });

  //自定义测试用例
  context("Switch Customize Testing", function () {
    before(function () {
      // 进入Switch页
      cy.visit("#/components/switch/demo/index");
    });

    it("solution #1: switch-自定义背景色", function () {
      //自定义on背景色
      cy.get(".block-section")
        .eq(2)
        .find("taro-view-core")
        .should(($switch) => {
          //switch-color
          expect($switch)
            .to.have.css("background-color")
            .eq("rgb(221, 26, 33)");
          expect($switch).to.have.css("border-color").eq("rgb(221, 26, 33)");
        });

      //自定义off背景色
      cy.get(".block-section")
        .eq(3)
        .find("taro-view-core")
        .should(($switch) => {
          //switch-color
          expect($switch)
            .to.have.css("background-color")
            .eq("rgb(223, 223, 223)");
          expect($switch).to.have.css("border-color").eq("rgb(223, 223, 223)");
        });

      //自定义开关背景色
      cy.get(".block-section")
        .eq(4)
        .find("taro-view-core")
        .should(($switch) => {
          //switch-color
          expect($switch[1])
            .to.have.css("background-color")
            .eq("rgb(244, 244, 244)");
          expect($switch[1])
            .to.have.css("border-color")
            .eq("rgb(244, 244, 244)");
        });
    });
  });

  //禁用测试用例
  context("Switch Disabled Testing", function () {
    before(function () {
      // 进入Switch页
      cy.visit("#/components/switch/demo/index");
    });

    it("solution #1: switch-禁用on", function () {
      cy.get(".block-section")
        .eq(5)
        .find("taro-view-core")
        .should(($switch) => {
          //样式
          const switchClassName = $switch[0].className;
          expect(switchClassName).to.be.match(/--disabled/);
          expect(switchClassName).to.not.be.match(/--checked/);
        });

      //点击后样式
      cy.get(".ossa-switch")
        .eq(5)
        .click()
        .should(($switch) => {
          //样式
          const switchClassName = $switch[0].className;
          expect(switchClassName).to.be.match(/--disabled/);
          expect(switchClassName).to.not.be.match(/--checked/);
        });
    });
  });

  //点击测试用例
  context("Switch Click Testing", function () {
    before(function () {
      // 进入Switch页
      cy.visit("#/components/switch/demo/index");
    });

    const sites = [
      {
        index: 1,
        site: "topLeft",
      },
      {
        index: 2,
        site: "top",
      },
      {
        index: 3,
        site: "topRight",
      },
      {
        index: 4,
        site: "left",
      },
      {
        index: 5,
        site: "center",
      },
      {
        index: 6,
        site: "right",
      },
      {
        index: 7,
        site: "bottomLeft",
      },
      {
        index: 8,
        site: "bottom",
      },
      {
        index: 9,
        site: "bottomRight",
      },
    ];
    sites.forEach((site) => {
      it(`solution #${site.index}: switch-点击${site.site}`, function () {
        cy.get(".ossa-switch")
          .eq(0)
          .click(`${site.site}`, { force: true })
          .should(($switch) => {
            const switchClassName = $switch[0].className;
            if (`${site.index}` % 2 == 0) {
              expect(switchClassName).to.be.match(/--checked/);
            } else {
              expect(switchClassName).to.be.match(/switch/);
            }
          });
      });
    });
  });
});
