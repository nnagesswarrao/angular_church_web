import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface CouncilMember {
    name: string;
    position: string;
    avatar: string;
    yearStart: number;
    yearEnd?: number;
    children?: CouncilMember[];
}

interface ChurchService {
    id: number;
    weekDay: string;
    timing: string;
    servicedBy: string;
}

@Component({
    selector: 'app-about-us',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
    // Sample data for the church history and organization
    churchHistory: string = `Our church was founded in 1900 with the mission to serve the community... (1000 words of sample data)`;




    governingCouncil: CouncilMember[] = [
        {
            name: "Rev. John Davidson",
            position: "Senior Pastor",
            yearStart: 2015,
            avatar: "assets/avatar/avatar-m.jpg",
            children: [
                {
                    name: "Pastor Sarah Miller",
                    position: "Associate Pastor",
                    yearStart: 2017,
                    avatar: "assets/avatar/avatar-m.jpg",                    children: [
                        {
                            name: "Deacon Mike Brown",
                            position: "Youth Ministry",
                            yearStart: 2019,
                            avatar: "assets/avatar/avatar-m.jpg",                        },
                        {
                            name: "Deacon Lisa Chen",
                            position: "Children's Ministry",
                            yearStart: 2020,
                            avatar: "assets/avatar/avatar-m.jpg",                        }
                    ]
                },
                {
                    name: "Pastor James Wilson",
                    position: "Worship Pastor",
                    yearStart: 2016,
                    avatar: "assets/avatar/avatar-m.jpg",                    children: [
                        {
                            name: "Deacon Emily Wright",
                            position: "Choir Director",
                            yearStart: 2018,
                            avatar: "assets/avatar/avatar-m.jpg",                        }
                    ]
                }
            ]
        }
    ];

    churchServices: ChurchService[] = [
        {
            id: 1,
            weekDay: "Sunday",
            timing: "9:00 AM - 11:00 AM",
            servicedBy: "Rev. John Davidson"
        },
        {
            id: 2,
            weekDay: "Sunday",
            timing: "5:00 PM - 6:30 PM",
            servicedBy: "Pastor Sarah Miller"
        },
        {
            id: 3,
            weekDay: "Wednesday",
            timing: "6:30 PM - 8:00 PM",
            servicedBy: "Pastor James Wilson"
        },
        {
            id: 4,
            weekDay: "Friday",
            timing: "7:00 PM - 8:30 PM",
            servicedBy: "Pastor Sarah Miller"
        },
        {
            id: 5,
            weekDay: "Saturday",
            timing: "6:00 PM - 7:30 PM",
            servicedBy: "Deacon Mike Brown"
        }
    ];
}
