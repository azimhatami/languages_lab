import asyncio
import time
from time import perf_counter

async def count():
   print("One")
   await asyncio.sleep(1)
   print("Two")

async def main():
   await asyncio.gather(count(), count(), count())

if __name__ == "__main__":
   s1 = perf_counter()
   asyncio.run(main())
   s2 = perf_counter()
   res = s2 - s1
   print(f"{__file__} executed in {res:0.2f} seconds.")

# def counter():
#    print("One")
#    time.sleep(1)
#    print("Two")

# counter()
# counter()
# counter()