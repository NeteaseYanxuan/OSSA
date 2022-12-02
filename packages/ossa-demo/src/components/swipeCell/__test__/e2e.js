describe("SwipeCell Testing", function () {
  context("SwipeCell Normal Testing", function () {
    before(function () {
      // 进入SwipeCell页
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

          // 约等于  误差0.0005
          function approximatelyEqual(x, y, epsilon = 0.0005) {
            return Math.abs(x - y) < epsilon;
          }

          function getTranslateX(str) {
            let num;
            str.replace(/translate3d\((.*?)px,.*?px,.*?px\)/, function (a, b) {
              num = +b;
            });
            return Math.abs(num);
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
                cy.log($wrap[0].style.transform);
                cy.log(width);
                // 比较移动位置
                expect(
                  approximatelyEqual(
                    getTranslateX($wrap[0].style.transform),
                    isDisabled ? 0 : width
                  )
                ).equal(true);

                cy.get(selector)
                  .trigger("touchstart", getTouchEvent(startPageX, pageY))
                  .trigger("touchmove", getTouchEvent(startPageX + 100, pageY))
                  .trigger("touchend", getTouchEvent(startPageX + 100, pageY))
                  .wait(300)
                  .get(selector + " .ossa-swipecell__right")
                  .then(($el) => {
                    const { width } = $el[0].getBoundingClientRect();
                    cy.get(selector + " .ossa-swipecell__wrapper").then(
                      ($wrap) => {
                        // 比较移动位置
                        expect(
                          approximatelyEqual(
                            getTranslateX($wrap[0].style.transform),
                            0
                          )
                        ).equal(true);
                      }
                    );
                  });
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
