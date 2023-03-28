#include "main.h"

/**
 * _printf - produces output accourding to format
 * @format: string, first argument
 * Return: length of format
 */

int _printf(const char *format, ...)
{
	int i;

	for (i = 0; format[i] != '\0'; i++)
	{
		_putchar(i);
	}
	else 
	{
		return (NULL);
	}
}

