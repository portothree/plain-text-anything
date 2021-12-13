# Spaced repetition with PTA

A `main.dat` file contains a set of flashcards with a Question (Q) and an Answer (A), they are represented using the PTA framework and uses the [sp-repetition](https://github.com/portothree/spaced-repetition) node package to review and write next due dates.

Example:

```
k Q ; Question
k A ; Answer

2021-11-30	DevOps:Kubernetes
	Q: What is an Ingress?
	A: An API object that manages external access to the services in a cluster, typically HTTP.
```
