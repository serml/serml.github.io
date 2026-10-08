---
title: "Máquina de Theseus para resolver laberintos"
description: "Una de las primeras máquinas que demostró capacidades de aprendizaje automático al recorrer un laberinto. Construida con circuitos de relés telefónicos en 1950."
published: false
tags:
  - "AI"
  - "Robotics"
  - "Machine Learning"
  - "Hardware"
image: "/images/placeholder.svg"
external_url: "https://en.wikipedia.org/wiki/Theseus_(robot)"
lang: "es"
translationKey: "thesus-mouse"
---

## Descripción general

Theseus era un robot experimental que construí en Bell Labs en 1950 para resolver laberintos. Fue uno de los primeros ejemplos de una máquina capaz de aprender y mejorar su comportamiento.

![Demostración del ratón Theseus](/images/placeholder.svg)

## Implementación técnica

El sistema constaba de:

1. **El ratón**: un pequeño vehículo con ruedas y sensores magnéticos.
2. **El laberinto**: una cuadrícula de 5 × 5 con paredes móviles y pasadizos ocultos.
3. **El sistema de control**: más de 40 relés telefónicos que almacenaban el recorrido aprendido.
4. **La alimentación**: electricidad convencional y lógica basada en relés.

### Cómo aprendía

1. **Exploración**: el ratón se desplaza al azar y explora todos los caminos.
2. **Detección del éxito**: al llegar a la meta, el recorrido queda registrado eléctricamente.
3. **Almacenamiento de memoria**: los relés guardan qué movimientos conducen al éxito.
4. **Ejecución**: los recorridos posteriores utilizan la ruta almacenada y evitan los callejones sin salida.

Los relés eran «biestables»: una vez activados, permanecían así hasta que se reiniciaban manualmente. De este modo se conservaba la memoria de los caminos exitosos.

## Innovaciones

- **Máquina con capacidad de aprendizaje**: aprendía sin programación explícita.
- **Computación con relés**: uso pionero de equipos telefónicos para realizar cálculos.
- **Inteligencia artificial**: una de las primeras experiencias de IA, antes de que el campo tuviera ese nombre.

## Recepción pública

La máquina se presentó ante la prensa y la comunidad técnica, y despertó mucho interés. Apareció en:

- *Popular Science Monthly*.
- *Scientific American*.
- Diversos medios de comunicación.

## Legado

Theseus demostró que:
1. Las máquinas pueden mostrar comportamientos inteligentes.
2. El aprendizaje puede implementarse en hardware.
3. La inteligencia no es exclusiva de los seres vivos.

Sus principios influyeron en trabajos posteriores de inteligencia artificial, robótica y aprendizaje por refuerzo.

---

*Theseus demostró que, con los circuitos adecuados, las máquinas podían aprender.*
