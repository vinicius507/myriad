---
title: "École 42: Libft"
description: "The project libft consists in creating a library with some functions of libc"
date: "2021-07-15" 
badge: "ecole42"
tags: "ecole42 project"
---

The subject asks for a static library called `libft`. Every project at 42 has a
mandatory part and a bonus part. The mandatory part of this project asks for
some functions that are clones of `libc` functions and some that are either
part of `libc` but are slightly modified, or are not part of `libc` at all.

[Link to my repository.](https://github.com/vinicius507/libft/)

## Mandatory

The mandatory part has the following functions that are clone of `libc`:

- Memory: ft\_memset, ft\_bzero, ft\_memcpy, ft\_memccpy,
  ft\_memmove, ft\_memchr, ft\_memcmp and ft\_calloc.
- String: ft\_strlen, ft\_strlcpy, ft\_strlcat, ft\_strchr,
  ft\_strrchr, ft\_strnstr, ft\_strncmp, ft\_strdup and ft\_atoi
- Character: ft\_isalpha, ft\_isdigit, ft\_isalnum, ft\_isascii, ft\_isprint,
  ft\_toupper, ft\_tolower

And these ones:

- String: ft\_substr, ft\_strjoin, ft\_strtrim, ft\_split, ft\_itoa and
  ft\_strmapi
- Data display: ft\_putchar\_fd, ft\_putstr\_fd, ft\_putendl\_fd,
  ft\_putnbr\_fd

## Bonus

The bonus part of `libft` is related to **linked lists**. A linked list is a
data structure that consists of a sequence of items, linked to each other, in a
linear order. Each element(called **node**) holds  at least two values:

- `content`: the value of the item in the list.
- `next` and/or `previous`: the link to the next/previous item in the list.

Linked lists with both `next` and `previous`(known as doubly linked list) are
easier to transverse in both forward and backward directions, while lists with
only one `next` or `previous`(known as singly linked list) can only be
transversed in one direction.

Here we are dealing with a singly linked list, so our structure is like this:

```c
typedef struct s_list
{
	void			*content;
	struct s_list	*next;
}	t_list;
```

And the functions that deal with the linked list:

- ft\_lstnew: allocates and returns a new list element. The variable `content` is
  initialized with the value passed as parameter and `next` is initialized to
  `NULL`.
- ft\_lstadd\_front: adds the element `new` to the beginning of the list.
- ft\_lstadd\_back: adds the element `new` to the end of the list.
- ft\_lstsize: counts the number of elements of a list(starting from the
  element passed as parameter).
- ft\_lstlast: returns the last element of list.
- ft\_lstdelone: frees the memory of a list element, applying the function
  `del` to the content of the element.
- ft\_lstclear: same as ft\_lstdelone but for all elements starting from the
  one passed as parameter of the function.
- ft\_lstiter: iterates the list while applying the function `f` to each element.
- ft\_lstmap: iterates the list while applying the function `f` to each
  element. Creates a new list resulting of the successive applications of `f`.
