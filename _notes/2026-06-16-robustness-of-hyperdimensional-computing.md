---
member: Shaohuang Wang
date: 2026-06-16
title: Robustness of Hyperdimensional Computing
authors: D. Kleyko, D. A. Rachkovskij, E. Osipov, A. Rahimi
venue: ACM Computing Surveys
year: 2023
link: https://doi.org/10.1145/3558000
citation: 'D. Kleyko, D. A. Rachkovskij, E. Osipov, and A. Rahimi, "A survey on hyperdimensional computing aka vector symbolic architectures, part II," ACM Comput. Surv., vol. 55, no. 9, pp. 1-52, 2023, doi:10.1145/3558000.'
tags:
  - HDC
  - robustness/reliability
tldr: High-dimensional holographic encoding lets HDC classifiers degrade gracefully under bit-flip / memory faults where DNNs collapse.
problem: |-
  Edge accelerators hit memory bit errors under aggressive voltage scaling; DNN accuracy drops sharply. We want a model that is robust by construction.
method: |-
  Encode inputs as ~10k-dimensional bipolar hypervectors; class prototypes are bundled (superposed) vectors; inference = nearest cosine match. Redundancy across thousands of dimensions absorbs random bit errors.
contributions: |-
  1. Unifies the HDC encoding/operations framework and its theoretical robustness properties.
  2. Catalogs where holographic redundancy buys graceful degradation vs. where it does not.
results: |-
  Across UCI-HAR, ISOLET, MNIST; metric = accuracy vs. bit-error-rate; baseline = MLP. HDC retains most accuracy at error rates where the MLP baseline falls off sharply.
strengths: |-
  Robustness "for free"; cheap binary/integer ops; a natural fit for our approximate-computing and voltage-scaling angle.
weaknesses: |-
  Lower clean-accuracy ceiling than DNNs; the ~10k-dimensional footprint is heavy for tiny MCUs; mostly random (not structured/burst) faults are analyzed.
relevance: |-
  Directly supports our edge-AI + reliability line — could be combined with our approximate-computing work to co-design a fault-tolerant HDC accelerator.
open_questions: |-
  Does the robustness hold under structured (burst) faults? Can we shrink dimensionality without losing it? Read a quantized-HDC paper next week.
artifacts: ''
---

*This is a seed example showing the rendered format. New notes are created through the [CMS](/admin/) — no Markdown editing required.*
