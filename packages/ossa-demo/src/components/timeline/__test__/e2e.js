/// <reference types="Cypress" />

//author by mannix
//Date on 2024/11/12
//Page in Timeline

describe("Timeline", function () {
  context("Timeline Basic Testing", function () {
    before(function () {
      // 进入Timeline页
      cy.visit("#/components/timeline/demo/index");
    });

    it("solution #1: 基础用法", function () {
      cy.get(".ossa-timeline").should(($tab) => {
        expect($tab).to.have.length(1);
        expect($tab.find(".ossa-timeline-item")).to.have.length(4);
      });
    });

    it("solution #2: 设置颜色", function () {
      cy.get(".ossa-timeline").should(($tab) => {
        expect($tab).to.have.length(1);
        expect($tab.find(".ossa-timeline-item")).to.have.length(4);
        expect($tab.find(".ossa-timeline-item").eq(1)).to.have.css(
          "color",
          "rgb(0, 128, 0)"
        );
        expect($tab.find(".ossa-timeline-item").eq(2)).to.have.css(
          "color",
          "rgb(255, 0, 0)"
        );
        expect($tab.find(".ossa-timeline-item").eq(3)).to.have.css(
          "color",
          "rgb(255, 255, 0)"
        );
      });
    });

    it("solution #3: 使用Icon", function () {
      cy.get(".ossa-timeline").should(($tab) => {
        expect($tab).to.have.length(1);
        expect($tab.find(".ossa-timeline-item")).to.have.length(4);
        expect($tab.find(".ossa-timeline-item").eq(0)).to.have.css(
          "color",
          "rgb(7, 193, 96)"
        );
        expect($tab.find(".ossa-timeline-item").eq(1)).to.have.css(
          "color",
          "rgb(7, 193, 96)"
        );
        expect($tab.find(".ossa-timeline-item").eq(2)).to.have.css(
          "color",
          "rgb(244, 143, 24)"
        );
        expect($tab.find(".ossa-timeline-item").eq(3)).to.have.css(
          "color",
          "rgb(217, 217, 217)"
        );
      });
    });

    it("solution #4: 丰富内容", function () {
      cy.get(".ossa-timeline").should(($tab) => {
        expect($tab).to.have.length(1);
        expect($tab.find(".ossa-timeline-item")).to.have.length(4);
        expect($tab.find(".ossa-timeline-item").eq(0)).to.have.css(
          "color",
          "rgb(7, 193, 96)"
        );
        expect($tab.find(".ossa-timeline-item").eq(1)).to.have.css(
          "color",
          "rgb(244, 143, 24)"
        );
        expect($tab.find(".ossa-timeline-item").eq(2)).to.have.css(
          "color",
          "rgb(217, 217, 217)"
        );
        expect($tab.find(".ossa-timeline-item").eq(3)).to.have.css(
          "color",
          "rgb(7, 193, 96)"
        );
      });
    });
  });
});
