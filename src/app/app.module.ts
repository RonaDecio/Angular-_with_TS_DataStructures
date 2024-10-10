import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { StudentlistComponent } from './Components/studentlist/studentlist.component';
import { EmployeelistComponent } from './Components/employeelist/employeelist.component';
import { FruitlistComponent } from './Components/fruitlist/fruitlist.component';
import { CourselistComponent } from './Components/courselist/courselist.component';
import { BooklistComponent } from './Components/booklist/booklist.component';
import { CitylistComponent } from './Components/citylist/citylist.component';
import { MovielistComponent } from './Components/movielist/movielist.component';
import { CarmodellistComponent } from './Components/carmodellist/carmodellist.component';
import { ProductlistComponent } from './Components/productlist/productlist.component';
import { SubjectlistComponent } from './Components/subjectlist/subjectlist.component';
import { CountrylistComponent } from './Components/countrylist/countrylist.component';
import { SportlistComponent } from './Components/sportlist/sportlist.component';
import { VegetablelistComponent } from './Components/vegetablelist/vegetablelist.component';
import { AnimallistComponent } from './Components/animallist/animallist.component';
import { ToollistComponent } from './Components/toollist/toollist.component';
import { LanguagelistComponent } from './Components/languagelist/languagelist.component';
import { GamelistComponent } from './Components/gamelist/gamelist.component';
import { SoftwarelistComponent } from './Components/softwarelist/softwarelist.component';
import { PhonelistComponent } from './Components/phonelist/phonelist.component';
import { MusicplaylistComponent } from './Components/musicplaylist/musicplaylist.component';
import { FoodmenuComponent } from './Components/foodmenu/foodmenu.component';
import { GrocerylistComponent } from './Components/grocerylist/grocerylist.component';
import { ClassroomlistComponent } from './Components/classroomlist/classroomlist.component';
import { InventorylistComponent } from './Components/inventorylist/inventorylist.component';
import { LecturelistComponent } from './Components/lecturelist/lecturelist.component';
import { StationerylistComponent } from './Components/stationerylist/stationerylist.component';
import { FlowerlistComponent } from './Components/flowerlist/flowerlist.component';
import { DestinationlistComponent } from './Components/destinationlist/destinationlist.component';
import { LaptoplistComponent } from './Components/laptoplist/laptoplist.component';
import { LaptopspecificationslistComponent } from './Components/laptopspecificationslist/laptopspecificationslist.component';
import { ComputerhardwarelistComponent } from './Components/computerhardwarelist/computerhardwarelist.component';
import { MobileapplistComponent } from './Components/mobileapplist/mobileapplist.component';
import { VideolistComponent } from './Components/videolist/videolist.component';
import { TvshowlistComponent } from './Components/tvshowlist/tvshowlist.component';
import { FurniturelistComponent } from './Components/furniturelist/furniturelist.component';
import { AccessorylistComponent } from './Components/accessorylist/accessorylist.component';
import { BuildinglistComponent } from './Components/buildinglist/buildinglist.component';
import { PaintinglistComponent } from './Components/paintinglist/paintinglist.component';
import { ArtistlistComponent } from './Components/artistlist/artistlist.component';
import { ComposerlistComponent } from './Components/composerlist/composerlist.component';
import { PodcastlistComponent } from './Components/podcastlist/podcastlist.component';
import { ExerciselistComponent } from './Components/exerciselist/exerciselist.component';
import { MealplanlistComponent } from './Components/mealplanlist/mealplanlist.component';
import { BudgetlistComponent } from './Components/budgetlist/budgetlist.component';
import { PresentationlistComponent } from './Components/presentationlist/presentationlist.component';
import { TourlistComponent } from './Components/tourlist/tourlist.component';
import { EventlistComponent } from './Components/eventlist/eventlist.component';
import { DevelopertoolslistComponent } from './Components/developertoolslist/developertoolslist.component';
import { FrameworklistComponent } from './Components/frameworklist/frameworklist.component';
import { LibrarylistComponent } from './Components/librarylist/librarylist.component';

const routes: Routes = [
  {path: '', component: StudentlistComponent},
  {path: 'employeelist', component: EmployeelistComponent},
  {path: 'fruitlist', component: FruitlistComponent},
  {path: 'courselist', component: CourselistComponent},
  {path: 'booklist', component: BooklistComponent},
  {path: 'citylist', component: CitylistComponent},
  {path: 'movielist', component: MovielistComponent},
  {path: 'carmodellist', component: CarmodellistComponent},
  {path: 'productlist', component: ProductlistComponent},
  {path: 'subjectlist', component: SubjectlistComponent},
  {path: 'countrylist', component: CountrylistComponent},
  {path: 'sportlist', component: SportlistComponent},
  {path: 'vegetablelist', component: VegetablelistComponent},
  {path: 'animallist', component: AnimallistComponent},
  {path: 'toollist', component: ToollistComponent},
  {path: 'languagelist', component: LanguagelistComponent},
  {path: 'gamelist', component: GamelistComponent},
  {path: 'softwarelist', component: SoftwarelistComponent},
  {path: 'phonelist', component: PhonelistComponent},
  {path: 'musicplaylist', component: MusicplaylistComponent},
  {path: 'foodmenu', component: FoodmenuComponent},
  {path: 'grocerylist', component: GrocerylistComponent},
  {path: 'classroomlist', component: ClassroomlistComponent},
  {path: 'inventorylist', component: InventorylistComponent},
  {path: 'lecturelist', component: LecturelistComponent},
  {path: 'stationerylist', component: StationerylistComponent},
  {path: 'flowerlist', component: FlowerlistComponent},
  {path: 'destinationlist', component: DestinationlistComponent},
  {path: 'laptoplist', component: LaptoplistComponent},
  {path: 'laptopspecificationslist', component: LaptopspecificationslistComponent},
  {path: 'computerhardwarelist', component: ComputerhardwarelistComponent},
  {path: 'mobileapplist', component: MobileapplistComponent},
  {path: 'videolist', component: VideolistComponent},
  {path: 'tvshowlist', component: TvshowlistComponent},
  {path: 'furniturelist', component: FurniturelistComponent},
  {path: 'accessorylist', component: AccessorylistComponent},
  {path: 'buildinglist', component: BuildinglistComponent},
  {path: 'paintinglist', component: PaintinglistComponent},
  {path: 'artistlist', component: ArtistlistComponent},
  {path: 'composerlist', component: ComposerlistComponent},
  {path: 'podcastlist', component: PodcastlistComponent},
  {path: 'exerciselist', component: ExerciselistComponent},
  {path: 'mealplanlist', component: MealplanlistComponent},
  {path: 'budgetlist',component: BudgetlistComponent},
  {path: 'presentationlist', component: PresentationlistComponent},
  {path: 'tourlist', component: TourlistComponent},
  {path: 'eventlist', component: EventlistComponent},
  {path: 'developertoolslist', component: DevelopertoolslistComponent},
  {path: 'frameworklist', component: FrameworklistComponent},
  {path: 'librarylist', component: LibrarylistComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    EmployeelistComponent,
    FruitlistComponent,
    CourselistComponent,
    BooklistComponent,
    CitylistComponent,
    MovielistComponent,
    CarmodellistComponent,
    ProductlistComponent,
    SubjectlistComponent,
    CountrylistComponent,
    SportlistComponent,
    VegetablelistComponent,
    AnimallistComponent,
    ToollistComponent,
    LanguagelistComponent,
    GamelistComponent,
    SoftwarelistComponent,
    PhonelistComponent,
    MusicplaylistComponent,
    FoodmenuComponent,
    GrocerylistComponent,
    ClassroomlistComponent,
    InventorylistComponent,
    LecturelistComponent,
    StationerylistComponent,
    FlowerlistComponent,
    DestinationlistComponent,
    LaptoplistComponent,
    LaptopspecificationslistComponent,
    ComputerhardwarelistComponent,
    MobileapplistComponent,
    VideolistComponent,
    TvshowlistComponent,
    FurniturelistComponent,
    AccessorylistComponent,
    BuildinglistComponent,
    PaintinglistComponent,
    ArtistlistComponent,
    ComposerlistComponent,
    PodcastlistComponent,
    ExerciselistComponent,
    MealplanlistComponent,
    BudgetlistComponent,
    PresentationlistComponent,
    TourlistComponent,
    EventlistComponent,
    DevelopertoolslistComponent,
    FrameworklistComponent,
    LibrarylistComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
