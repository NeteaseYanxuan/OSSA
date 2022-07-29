/// <reference types="Cypress" />

//author by hzxuxinya
//Date on 2019/07/31
//Page in Carousel

describe("Carousel Testing", function () {
  context("Carousel Testing", function () {
    before(function () {
      // 进入Carousel页
      cy.visit("#/components/carousel/demo/index");
    });

    // it('solution #1: 轮播点-点击游标切换功能', function() {
    //     cy
    //       .get('.swiper-pagination-bullet').eq(3)
    //       //点击第4个红点标记切换轮播
    //       .click()
    //       .should(($pagination) => {
    //           //红点高亮
    //           const classname = $pagination[0].className
    //           expect(classname).to.be.match(/swiper-pagination-bullet-active/)
    //       })
    //     //第4张图为展示状态
    //     cy
    //       .get('[data-swiper-slide-index="3"]')
    //       .should(($swiperFourth) => {
    //           const classname = $swiperFourth[0].className
    //           expect(classname).to.be.match(/swiper-slide-active/)
    //       })
    // })

    it("solution #2: 轮播点-4s切换功能", function () {
      // 4s轮播动画验证
      cy.get(".swiper-slide-active")
        .eq(0)
        .clock()
        .tick(4001)
        .should(($swiperActive) => {
          expect($swiperActive[0].className).to.be.match(/-prev/);
        });
    });

    it("solution #3: 轮播点-滑动切换功能", function () {
      // 滑动轮播验证
      cy.get(".swiper-slide-active")
        .eq(0)
        .should(($swiperActive) => {
          $swiperActive.trigger("mousedown", {
            which: 1,
            offsetX: 1000,
            offsetY: 100,
          });
          $swiperActive.trigger("mousemove", {
            which: 1,
            offsetX: 100,
            offsetY: 100,
          });
          $swiperActive.trigger("mouseup");
          expect($swiperActive[0].className).to.be.match(/-prev/);
        });
    });

    it("solution #4: 分隔式-样式", function () {
      cy.get(".block")
        .eq(1)
        .within(() => {
          cy.get(".ossa-carousel-swiper__item") //间距是加在ossa-carousel-swiper__item这个类上
            .should(($swiper2) => {
              //swiper展示区域左右间距检查
              const marginLeft = parseFloat($swiper2.css("padding-left"));
              const marginRight = parseFloat($swiper2.css("padding-right"));
              expect(marginLeft).to.be.eq(marginRight);
              expect(marginLeft).to.be.closeTo(5 / 2, 1); //各设边距10，加起来就是20
            });

          cy.get(".ossa-carousel-swiper__item__image").should(($swiperPic) => {
            //图片展示居中样式
            const marginLeft = parseFloat($swiperPic.css("padding-left"));
            const marginRight = parseFloat($swiperPic.css("padding-right"));
            expect(marginLeft).to.be.eq(marginRight);
          });
        });
    });

    it("solution #5: 分隔式-4s切换功能", function () {
      //4s轮播动画验证
      cy.get(".swiper-slide-active")
        .eq(0)
        .clock()
        .tick(4001)
        .should(($swiperActive) => {
          expect($swiperActive[0].className).to.be.match(/-prev/, {
            timeout: 10,
          });
        });
    });

    // it('solution #6: 分隔式-滑动切换功能', function() {
    //     // 滑动轮播验证
    //     cy
    //       .get('.swiper-slide-active').eq(0)
    //       .trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
    //       .trigger('mousemove', { which: 1, pageX: 100, pageY: 100 })
    //       .trigger('mouseup')
    //       .should(($swiperActive) => {
    //           expect($swiperActive[0].className).to.be.match(/-prev/, { timeout: 10 })
    //       })
    // })

    it("solution #7: 文字轮播-元素数量", function () {
      cy.get(".swiper-wrapper")
        .eq(2)
        .within(() => {
          //3个文案轮播，前后各复制一份，共计5
          cy.get(".swiper-slide").should("have.length", 5);
        });
    });

    // it('solution #8: 文字轮播-滑动功能', function() {
    //     // 滑动轮播验证
    //     cy
    //       .get('.swiper-slide-active', { timeout: 100 }).eq(2)
    //       .trigger('mousedown', { which: 1, pageX: 100, pageY: 600 })
    //       .trigger('mousemove', { which: 1, pageX: 100, pageY: 100 })
    //       .trigger('mouseup')
    //       .should(($swiperActive) => {
    //           expect($swiperActive[0].className).to.be.match(/-prev/, { timeout: 10 })
    //       })
    // })
  });
});

//TODO: 轮播点 最后一张可切换至第1张，待点击用例调通后补充
//TODO: 分隔式 最后一张可切换至第1张，视觉稿中包含游标小红点，demo中是否缺失？
//TODO：滑动待调试是否是超时导致的用例通过（需验证超时是否生效）
