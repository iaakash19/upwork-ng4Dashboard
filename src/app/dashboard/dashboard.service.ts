import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
    
    constructor() { }

    isMenuExpanded: boolean = false;
    isMenuVisible: boolean = false;
    
    get menuConf() {
        return [
            {
                title: 'dashboard',
                link: 'home',
                icon: 'dashboard',
                subNav: []
            },
            {
                title: 'tracking',
                link: '',
                icon: 'clock-o',
                subNav: [
                    {
                        title: 'cases',
                        link: 'cases', 
                    },
                    {
                        title: 'dispatch',
                        link: 'dispatch', 
                    },
                    {
                        title: 'notes',
                        link: 'notes', 
                    },
                    {
                        title: 'notifications',
                        link: 'notifications', 
                    }
                ]
            },
            {
                title: 'products',
                link: 'products',
                icon: 'product-hunt',
                subNav: []
            }
            
        ]
    }

}