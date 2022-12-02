public class MultiThreadingNumberGenerator {

	private static final int NUMBER_OF_THREADS = 3;
	private static final int NUMBERS_TO_PRINT = 10;
	private static int counter = 1;
	private static Object mutex = new Object();

	public static void main(String[] arg) {
		for (int i = 1; i <= NUMBER_OF_THREADS; i++) {
			new Thread(new NumberGenerator(i % NUMBER_OF_THREADS), "T" + i).start();
		}
	}

	static class NumberGenerator implements Runnable {

		private int remainder;

		public NumberGenerator(int remainder) {
			this.remainder = remainder;
		}

		@Override
		public void run() {
			while (counter <= NUMBERS_TO_PRINT) {
				synchronized (mutex) {
					if (counter % NUMBER_OF_THREADS == remainder) {
						System.out.println(Thread.currentThread().getName() + " " + counter);
						counter++;
						mutex.notifyAll();
					} else {
						try {
							mutex.wait();
						} catch (InterruptedException e) {
							e.printStackTrace();
						}
					}
				}
			}
		}
	}
}
