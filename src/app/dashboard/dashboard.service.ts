import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
    
    constructor() { }

    isMenuExpanded: boolean = true;
    isMask = false;
    isMenuVisible: boolean = false;
    notifications: Array<any> = [
        {
            text: 'Sample Notification 1'
        },
        {
            text: 'Sample Notification 2'
        }
    ];
    isNotifVisible = false;


    get menuConf() {
        return [
            {
                title: 'dashboard',
                link: 'home',
                icon: 'stats-growth',
                subNav: [],
                active: false
            },
            {
                title: 'tracking',
                link: '',
                icon: 'satellite-dish2',
                active: false,
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
                icon: 'copy',
                subNav: [],
                active: false
            },
            {
                title: 'Reports',
                link: 'home',
                icon: 'statistics',
                subNav: [],
                active: false
            },
            {
                title: 'Configuration',
                link: 'home',
                icon: 'cog3',
                subNav: [],
                active: false
            },
            {
                title: 'Diagnostics',
                link: 'home',
                icon: 'windows2',
                active: false,
                subNav: [
                     {
                        title: 'Download',
                        link: 'home', 
                    },
                    {
                        title: 'Message',
                        link: 'home', 
                    },
                ]
            },
            {
                title: 'Masters-Mongo',
                link: 'home',
                icon: 'copy',
                subNav: [],
                active: false
            }
            
        ]
    }

}