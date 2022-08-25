/// <reference types="Cypress" />

//author by hzxuxinya
//Date on 2019/07/31
//Page in Layout

describe("Layout Testing", function () {
  //布局测试用例
  context("Layout Testing", function () {
    before(function () {
      // 进入Layout页
      cy.visit("#/components/layout/demo/index");
    });

    it("solution #1: 基础布局-样式", function () {
      cy.get(".block__body")
        .eq(0)
        .find(".ossa-row")
        .each(($row, rowIndex, $rowList) => {
          cy.get($row)
            .find(".ossa-col")
            .should(($cols) => {
              const colNum = $cols.length;
              const rowWidth = $cols.parents(".ossa-row").width();
              const colWidth = parseFloat($cols.css("width"));
              expect(colWidth).to.be.eq(rowWidth / colNum);
            });
        });
    });

    it("solution #2: 分栏间隔", function () {
      cy.get(".block__body")
        .eq(1)
        .find(".ossa-row")
        .eq(0)
        .find(".ossa-col")
        .each(($col, colIndex, $colList) => {
          cy.get($col).should(($col) => {
            const colNum = $colList.length;
            const rowWidth = $col.parents(".ossa-row").width();
            const colWidth = parseFloat($col.find(".col-content").css("width"));
            const colPaddingLeft = parseFloat($col.css("padding-left"));
            const colPaddingRight = parseFloat($col.css("padding-right"));
            let colGap = 0;
            if (colIndex === 0) {
              colGap = colPaddingRight;
            } else if (colIndex === colNum - 1) {
              colGap = colPaddingLeft;
            } else {
              colGap = colPaddingLeft + colPaddingRight;
            }
            expect(colWidth).to.be.eq(rowWidth / colNum - colGap);
          });
        });
    });

    it("solution #3: Flex布局居左-样式", function () {
      cy.get(".block__body")
        .eq(2)
        .find(".ossa-row.ossa-row-justify-start")
        .should(($row) => {
          expect($row.css("justify-content")).to.be.eq("flex-start");
        })
        .find(".ossa-col")
        .should(($col) => {
          //col数量验证
          const colNum = $col.length;
          expect(colNum).to.be.eq(3);
          //col宽度验证
          const bodywidth = $col.parents(".ossa-row").width();
          const colWidth = parseFloat($col.css("width"));
          expect(colWidth).to.be.eq(bodywidth / (colNum + 1));
        });
    });

    it("solution #4: Flex布局居中-样式", function () {
      cy.get(".block__body")
        .eq(2)
        .find(".ossa-row.ossa-row-justify-center")
        .should(($row) => {
          expect($row.css("justify-content")).to.be.eq("center");
        })
        .find(".ossa-col")
        .should(($col) => {
          //col数量验证
          const colNum = $col.length;
          expect(colNum).to.be.eq(3);
          //col宽度验证
          const bodywidth = $col.parents(".ossa-row").width();
          const colWidth = parseFloat($col.css("width"));
          expect(colWidth).to.be.eq(bodywidth / (colNum + 1));
        });
    });

    it("solution #5: Flex布局居右-样式", function () {
      cy.get(".block__body")
        .eq(2)
        .find(".ossa-row.ossa-row-justify-end")
        .should(($row) => {
          expect($row.css("justify-content")).to.be.eq("flex-end");
        })
        .find(".ossa-col")
        .should(($col) => {
          //col数量验证
          const colNum = $col.length;
          expect(colNum).to.be.eq(3);
          //col宽度验证
          const bodywidth = $col.parents(".ossa-row").width();
          const colWidth = parseFloat($col.css("width"));
          expect(colWidth).to.be.eq(bodywidth / (colNum + 1));
        });
    });

    it("solution #6: Flex布局between-样式", function () {
      cy.get(".block__body")
        .eq(2)
        .find(".ossa-row-justify-space-between")
        .should(($row) => {
          expect($row.css("justify-content")).to.be.eq("space-between");
        })
        .find(".ossa-col")
        .should(($col) => {
          //col数量验证
          const colNum = $col.length;
          expect(colNum).to.be.eq(3);
          //col宽度验证
          const bodywidth = $col.parents(".ossa-row").width();
          const colWidth = parseFloat($col.css("width"));
          expect(colWidth).to.be.eq(bodywidth / (colNum + 1));
        });
    });

    it("solution #7: Flex布局around-样式", function () {
      cy.get(".block__body")
        .eq(2)
        .find(".ossa-row-justify-space-around")
        .should(($row) => {
          expect($row.css("justify-content")).to.be.eq("space-around");
        })
        .find(".ossa-col")
        .should(($col) => {
          //col数量验证
          const colNum = $col.length;
          expect(colNum).to.be.eq(3);
          //col宽度验证
          const bodywidth = $col.parents(".ossa-row").width();
          const colWidth = parseFloat($col.css("width"));
          expect(colWidth).to.be.eq(bodywidth / (colNum + 1));
        });
    });
  });
});
