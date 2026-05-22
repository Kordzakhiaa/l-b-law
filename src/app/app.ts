import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Lawyers } from './components/lawyers/lawyers';
import { Services } from './components/services/services';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Lawyers, Services, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
