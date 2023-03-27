#ifndef _MAIN_H
#define _MAIN_H

#include "stdlib.h"
#include "stdio.h"
#include "stdarg.h"

/**
 * struct function_s - structure holding an identifier and a function
 * @identifier: character identifying action
 * @print_function: function excecuted when identifier is identified
*/

typedef struct function_s
{
	char *identifier;
	int (*print_function)(va_list ap);
} function_t;


int _putchar(char c);
int _printf(const char *format, ...);

#endif /* MAIN_H */

