import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'formizi',
        appId: '1:552311019345:web:471caa0c7f85b7b3dd6570',
        databaseURL:
          'https://formizi-default-rtdb.asia-southeast1.firebasedatabase.app',
        storageBucket: 'formizi.firebasestorage.app',
        apiKey: 'AIzaSyCQDxDM8JVqrsDiSSLMfWefpWNamQbiAks',
        authDomain: 'formizi.firebaseapp.com',
        messagingSenderId: '552311019345',
        measurementId: 'G-E7E0QYETRB',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'formizi',
        appId: '1:552311019345:web:471caa0c7f85b7b3dd6570',
        databaseURL:
          'https://formizi-default-rtdb.asia-southeast1.firebasedatabase.app',
        storageBucket: 'formizi.firebasestorage.app',
        apiKey: 'AIzaSyCQDxDM8JVqrsDiSSLMfWefpWNamQbiAks',
        authDomain: 'formizi.firebaseapp.com',
        messagingSenderId: '552311019345',
        measurementId: 'G-E7E0QYETRB',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideMessaging(() => getMessaging()),
  ],
};
