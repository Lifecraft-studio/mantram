import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { AnnualReportComponent } from './investors/annual-report/annual-report.component';
import { ArticleOfAssociationComponent } from './investors/article-of-association/article-of-association.component';
import { CompositionOfBoardAndCommitteeComponent } from './investors/composition-of-board-and-committee/composition-of-board-and-committee.component';
import { CorporateAnnouncementComponent } from './investors/corporate-announcement/corporate-announcement.component';
import { DetailsOfKeyManagerialPersonnelComponent } from './investors/details-of-key-managerial-personnel/details-of-key-managerial-personnel.component';
import { DisclosureComponent } from './investors/disclosure/disclosure.component';
import { DividendComponent } from './investors/dividend/dividend.component';
import { FinancialInformationComponent } from './investors/financial-information/financial-information.component';
import { FormsComponent } from './investors/forms/forms.component';
import { GeneralDetailsComponent } from './investors/general-details/general-details.component';
import { GeneralMeetingNoticeComponent } from './investors/general-meeting-notice/general-meeting-notice.component';
import { InitialPublicOfferComponent } from './investors/initial-public-offer/initial-public-offer.component';
import { InvestorsComponent } from './investors/investors.component';
import { MaterialityPolicyComponent } from './investors/materiality-policy/materiality-policy.component';
import { NewspaperPublicationComponent } from './investors/newspaper-publication/newspaper-publication.component';
import { PoliciesAndCodesOfConductComponent } from './investors/policies-and-codes-of-conduct/policies-and-codes-of-conduct.component';
import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [

    {
        path: '', component: LandingComponent, pathMatch: 'full'
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'investors', component: InvestorsComponent,
        children:[
            {
                path: 'general-details', component:GeneralDetailsComponent
            },
            {
                path: 'general-meeting-notice', component:GeneralMeetingNoticeComponent
            },
            {
                path: 'policies-and-codes-of-conduct', component:PoliciesAndCodesOfConductComponent
            },
            {
                path: 'initial-public-offer', component:InitialPublicOfferComponent
            },
            {
                path: 'annual-report', component:AnnualReportComponent
            },
            {
                path: 'article-of-association', component:ArticleOfAssociationComponent
            },
            {
                path: 'financial-information', component:FinancialInformationComponent
            },
            {
                path: 'newspaper-publication', component:NewspaperPublicationComponent
            },
            {
                path: 'materiality-policy', component:MaterialityPolicyComponent
            },
            {
                path: 'composition-of-board-and-committee', component:CompositionOfBoardAndCommitteeComponent
            },
            {
                path: 'details-of-key-managerial-personnel', component:DetailsOfKeyManagerialPersonnelComponent
            },
            {
                path: 'corporate-announcement', component:CorporateAnnouncementComponent
            },
            {
                path: 'forms', component:FormsComponent
            },
            {
                path: 'disclosure', component:DisclosureComponent
            },
            {
                path: 'dividend', component:DividendComponent
            },
        ]
    },
    {
        path: 'infrastructure', component: InfrastructureComponent
    },
    {
        path: 'products/:id', component: ProductsComponent
    },
    {
        path: 'products', redirectTo : 'products/aerial', pathMatch:'full'
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'career', component: CareersComponent
    },
];
