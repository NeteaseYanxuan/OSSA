//author by hzhuangchong
//Date on 2019/07/17
//Page in Input

describe("Input Testing", function () {
  //正常输入内容与清空
  context("Input Normal Testing", function () {
    before(function () {
      cy.visit("#/components/input/demo/index");
    });

    it("case #1: 有标题的输入框", function () {
      //点击清空
      cy.get(".ossa-icon.ossa-icon--delete-input").eq(0).click();
      //验证是否清空后内容为空
      cy.get('[placeholder="默认文案"]').eq(0).should("have.value", "");
      //输入内容，并验证输入后内容是否与输入内容一致
      cy.get('[placeholder="默认文案"]')
        .eq(0)
        .type("有标题的测试abc123")
        .should("have.value", "有标题的测试abc123");
    });

    it("case #2: 没有标题的输入框", function () {
      //点击清空
      cy.get(".ossa-icon.ossa-icon--delete-input").eq(1).click();
      //验证是否清空后内容为空
      cy.get('[placeholder="默认文案"]').eq(2).should("have.value", "");
      //输入内容，并验证输入后内容是否与输入内容一致
      cy.get('[placeholder="默认文案"]')
        .eq(2)
        .type("无标题的测试abc123")
        .should("have.value", "无标题的测试abc123");
    });

    it("case #3: 银行卡输入框", function () {
      //点击清空
      cy.get(".ossa-icon.ossa-icon--delete-input").eq(2).click();
      //验证是否清空后内容为空
      cy.get('[placeholder="银行行卡/礼品卡号"]').should("have.value", "");
      //输入内容，并验证输入后内容是否与输入内容一致
      cy.get('[placeholder="银行行卡/礼品卡号"]')
        .eq(0)
        .type("6222")
        .type("1234")
        .type("5678")
        .should("have.value", "622212345678");
    });

    it("case #4: 密码输入框", function () {
      //点击清空
      //cy.get('.ossa-icon.ossa-icon--delete-input').eq(3).click()
      cy.get(".ossa-icon.ossa-icon--delete-input").eq(3).click(); //上面输入框少一个清除按钮，修复后需要改下这里
      //验证是否清空后内容为空
      cy.get('[placeholder="请输入密码"]').should("have.value", "");
      //输入内容，并验证输入后内容是否与输入内容一致
      cy.get('[placeholder="请输入密码"]')
        .eq(0)
        .type("asd789")
        .should("have.value", "asd789");
      //验证为不显示明文模式（由于不显示明文模式，value或其他属性依然为实际值，只能用这种方法验证了
      cy.get('[password="true"]');
      //点击显示密码明文
      cy.get(".ossa-icon.ossa-icon--invisible.ossa-input__visible-ico").click();
      //验证为显示明文模式
      cy.get('[password="true"]').should("not.exist");
    });

    it("case #5: 数字输入框输入数字", function () {
      cy.get('[placeholder="请输入数字"]').eq(0).type("1"); //防止输入框没有内容，直接清空导致用例不通过
      //点击清空
      //cy.get('.ossa-icon.ossa-icon--delete-input').eq(4).click()
      cy.get(".ossa-icon.ossa-icon--delete-input").eq(4).click(); //上面输入框少一个清除按钮，修复后需要改下这里
      //验证是否清空后内容为空
      cy.get('[placeholder="请输入数字"]').should("have.value", "");
      //输入内容，并验证输入后内容是否与输入内容一致
      cy.get('[placeholder="请输入数字"]')
        .eq(0)
        .type("123789")
        .should("have.value", "123789");
    });

    it("case #6: 数字输入框输入非数字", function () {
      cy.get('[placeholder="请输入数字"]').eq(0).type("1"); //防止输入框没有内容，直接清空导致用例不通过
      //点击清空
      //cy.get('.ossa-icon.ossa-icon--delete-input').eq(4).click()
      cy.get(".ossa-icon.ossa-icon--delete-input").eq(4).click(); //上面输入框少一个清除按钮，修复后需要改下这里
      //验证是否清空后内容为空
      cy.get('[placeholder="请输入数字"]').should("have.value", "");
      //输入内容，并验证输入后内容是否与输入内容一致
      cy.get('[placeholder="请输入数字"]')
        .eq(0)
        .type("中文zimu")
        .should("have.value", "");
    });

    it("case #7: 多行输入", function () {
      //多行输入不支持清空按钮，直接输入文字验证，但原有文字不确定，可能有出错
      cy.get('[placeholder="请输入文本"]')
        .eq(1)
        .type("\n我是换行\n123\n")
        .should(
          "have.value",
          "网易严选秉承网易一贯的严谨态度，深入世界各地，严格把关所有商品的产地\n我是换行\n123\n"
        );

      //验证剩余文字数目的显示
      // cy.get('.ossa-input__count-down').contains('156')
      // //验证输入上限
      // cy.get('[placeholder="请输入文本"]').eq(1)
      //   .type('aaaaabbbbbcccccdddddaaaaabbbbbcccccdddddaaaaabbbbbcccccdddddaaaaabbbbbcccccdddddaaaaabbbbbcccccdddddaaaaabbbbbcccccdddddaaaaabbbbbcccccdddddaaaaabbbbbcccccd')
      // //验证剩余文字数目的显示
      // cy.get('.ossa-input__count-down').contains('0')
      // //继续输入验证，不会再显示
      // cy.get('[placeholder="请输入文本"]').eq(1).type('\n我是换行\n123\n')
      //   .should('have.value', '网易严选秉承网易一贯的严谨态度，深入世界各地，严格把关所有商品的产地\n我是换行\n123\naaaaabbbbbcccccdddddaaaaabbbbbcccccdddddaaaaabbbbbcccccdddddaaaaabbbbbcccccdddddaaaaabbbbbcccccdddddaaaaabbbbbcccccdddddaaaaabbbbbcccccdddddaaaaabbbbbcccccd')
      // cy.get('[placeholder="请输入文本"]').eq(1)
      //   .type('e')
      // cy.get('.ossa-input__count-down').contains('0')
      // cy.get('[placeholder="请输入文本"]').eq(1).type('\n我是换行\n123\n')
      //   .should('have.value', '网易严选秉承网易一贯的严谨态度，深入世界各地，严格把关所有商品的产地\n我是换行\n123\naaaaabbbbbcccccdddddaaaaabbbbbcccccdddddaaaaabbbbbcccccdddddaaaaabbbbbcccccdddddaaaaabbbbbcccccdddddaaaaabbbbbcccccdddddaaaaabbbbbcccccdddddaaaaabbbbbcccccd')
    });

    it("case #8: 不可编辑的单行输入框", function () {
      //验证不可编辑输入框是否disable
      cy.get('[placeholder="请输入文本"]').eq(3).should("have.be.disabled", "");
    });

    it("case #9: 不可编辑的多行输入框", function () {
      //验证不可编辑输入框是否disable
      cy.get("textarea").eq(1).should("have.be.disabled", "");
    });
  });
});
