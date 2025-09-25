import {signal} from '@angular/core';

export const globalSearch = signal<string>("makati");
export const globalStore = signal<string[]>([]);
export const globalUnit = signal<string>("C");