describe("SwipeCell Testing", function () {
  context("Stepper Normal Testing", function () {
    before(function () {
      cy.viewport("iphone-xr");
      // 进入Stepper页
      cy.visit("#/components/swipeCell/demo/index");
    });

    function commonTest(selector, isDisabled = false) {
      cy.window().then((win) => {
        cy.get(selector).then(($el) => {
          const { x, y, width, height } = $el[0].getBoundingClientRect();
          const startPageX = x + width / 2;
          const pageY = y + height / 2;

          function getTouchEvent(x, y) {
            const touchObj = new win.Touch({
              identifier: Date.now(),
              target: $el[0],
              clientX: x,
              clientY: y,
              radiusX: 2.5,
              radiusY: 2.5,
              rotationAngle: 10,
              force: 0.5,
            });
            return {
              cancelable: true,
              bubbles: true,
              touches: [touchObj],
              targetTouches: [],
              changedTouches: [touchObj],
              shiftKey: true,
            };
          }
          // 向左滑动
          cy.get(selector)
            .trigger("touchstart", getTouchEvent(startPageX, pageY))
            .trigger("touchmove", getTouchEvent(startPageX - 100, pageY))
            .trigger("touchend", getTouchEvent(startPageX - 100, pageY))
            .wait(300)
            .get(selector + " .ossa-swipecell__right")
            .then(($el) => {
              const { width } = $el[0].getBoundingClientRect();
              cy.get(selector + " .ossa-swipecell__wrapper").then(($wrap) => {
                // 比较移动位置
                expect($wrap[0].style.transform).equal(
                  isDisabled
                    ? `translate3d(0px, 0px, 0px)`
                    : `translate3d(-${width.toFixed(4)}px, 0px, 0px)`
                );
              });
            })
            .trigger("touchstart", getTouchEvent(startPageX, pageY))
            .trigger("touchmove", getTouchEvent(startPageX + 100, pageY))
            .trigger("touchend", getTouchEvent(startPageX + 100, pageY))
            .wait(300)
            .get(selector + " .ossa-swipecell__right")
            .then(($el) => {
              const { width } = $el[0].getBoundingClientRect();
              cy.get(selector + " .ossa-swipecell__wrapper").then(($wrap) => {
                // 比较移动位置
                expect($wrap[0].style.transform).equal(
                  `translate3d(0px, 0px, 0px)`
                );
              });
            });
        });
      });
    }

    it("case #1: 滑动单元格基础用法", function () {
      commonTest("#swipecell-1");
    });

    it("case #2: 滑动单元格禁用", function () {
      commonTest("#swipecell-2", true);
    });
  });
});
