import { Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout/layout.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GalleryComponent } from './components/gellary/gellary.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DonateComponent } from './components/donate/donate.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', component: LayoutComponent,
        children: [
            { path: '', component: HomePageComponent },
            {
                path: 'about-us',
                component: AboutUsComponent
            },
            {
                path: 'services',
                component: ServicesComponent
            },
            {
                path: 'contact-us',
                component: ContactUsComponent
            },
            {
                path: 'gallery',
                component: GalleryComponent
            },
            {
                path: 'projects',
                component: ProjectsComponent
            },
            {
                path: 'donate',
                component: DonateComponent
            },
            

        ]

    }
]
