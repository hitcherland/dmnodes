import {PromiseElement} from './util';
import {default as d3} from 'd3';

const base = PromiseElement('div', {
    parent: document.body,
    attributes: {class: 'base'},
});

base.then(function(parent) {
    PromiseElement('canvas', {
        parent,
        attributes: {class: 'graph'},
    });
});