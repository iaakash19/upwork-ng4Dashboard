import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
    
    constructor() { }

    isMenuExpanded: boolean = false;
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
                subNav: []
            },
            {
                title: 'tracking',
                link: '',
                icon: 'satellite-dish2',
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
                subNav: []
            },
            {
                title: 'Reports',
                link: 'home',
                icon: 'statistics',
                subNav: []
            },
            {
                title: 'Configuration',
                link: 'home',
                icon: 'cog3',
                subNav: []
            },
            {
                title: 'Diagnostics',
                link: 'home',
                icon: 'windows2',
                subNav: []
            },
            {
                title: 'Masters-Mongo',
                link: 'home',
                icon: 'copy',
                subNav: []
            }
            
        ]
    }

}