(function() {var implementors = {
"anyhow":[["impl Deref for <a class=\"struct\" href=\"anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>"]],
"embassy_sync":[["impl&lt;'a, M: <a class=\"trait\" href=\"embassy_sync/blocking_mutex/raw/trait.RawMutex.html\" title=\"trait embassy_sync::blocking_mutex::raw::RawMutex\">RawMutex</a>, T: Clone, const CAP: usize, const SUBS: usize, const PUBS: usize&gt; Deref for <a class=\"struct\" href=\"embassy_sync/pubsub/publisher/struct.ImmediatePublisher.html\" title=\"struct embassy_sync::pubsub::publisher::ImmediatePublisher\">ImmediatePublisher</a>&lt;'a, M, T, CAP, SUBS, PUBS&gt;"],["impl&lt;'a, T: Clone&gt; Deref for <a class=\"struct\" href=\"embassy_sync/pubsub/publisher/struct.DynImmediatePublisher.html\" title=\"struct embassy_sync::pubsub::publisher::DynImmediatePublisher\">DynImmediatePublisher</a>&lt;'a, T&gt;"],["impl&lt;'a, T: Clone&gt; Deref for <a class=\"struct\" href=\"embassy_sync/pubsub/publisher/struct.DynPublisher.html\" title=\"struct embassy_sync::pubsub::publisher::DynPublisher\">DynPublisher</a>&lt;'a, T&gt;"],["impl&lt;'a, M: <a class=\"trait\" href=\"embassy_sync/blocking_mutex/raw/trait.RawMutex.html\" title=\"trait embassy_sync::blocking_mutex::raw::RawMutex\">RawMutex</a>, T: Clone, const CAP: usize, const SUBS: usize, const PUBS: usize&gt; Deref for <a class=\"struct\" href=\"embassy_sync/pubsub/subscriber/struct.Subscriber.html\" title=\"struct embassy_sync::pubsub::subscriber::Subscriber\">Subscriber</a>&lt;'a, M, T, CAP, SUBS, PUBS&gt;"],["impl&lt;'a, M: <a class=\"trait\" href=\"embassy_sync/blocking_mutex/raw/trait.RawMutex.html\" title=\"trait embassy_sync::blocking_mutex::raw::RawMutex\">RawMutex</a>, T: Clone, const CAP: usize, const SUBS: usize, const PUBS: usize&gt; Deref for <a class=\"struct\" href=\"embassy_sync/pubsub/publisher/struct.Publisher.html\" title=\"struct embassy_sync::pubsub::publisher::Publisher\">Publisher</a>&lt;'a, M, T, CAP, SUBS, PUBS&gt;"],["impl&lt;'a, T: Clone&gt; Deref for <a class=\"struct\" href=\"embassy_sync/pubsub/subscriber/struct.DynSubscriber.html\" title=\"struct embassy_sync::pubsub::subscriber::DynSubscriber\">DynSubscriber</a>&lt;'a, T&gt;"],["impl&lt;'a, M, T&gt; Deref for <a class=\"struct\" href=\"embassy_sync/mutex/struct.MutexGuard.html\" title=\"struct embassy_sync::mutex::MutexGuard\">MutexGuard</a>&lt;'a, M, T&gt;<span class=\"where fmt-newline\">where\n    M: <a class=\"trait\" href=\"embassy_sync/blocking_mutex/raw/trait.RawMutex.html\" title=\"trait embassy_sync::blocking_mutex::raw::RawMutex\">RawMutex</a>,\n    T: ?Sized,</span>"]],
"embedded_svc":[["impl&lt;'a, R, T&gt; Deref for <a class=\"struct\" href=\"embedded_svc/utils/mutex/struct.MutexGuard.html\" title=\"struct embedded_svc::utils::mutex::MutexGuard\">MutexGuard</a>&lt;'a, R, T&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"embedded_svc/utils/mutex/trait.RawMutex.html\" title=\"trait embedded_svc::utils::mutex::RawMutex\">RawMutex</a>,</span>"]],
"esp_idf_hal":[["impl&lt;'a, T&gt; Deref for <a class=\"struct\" href=\"esp_idf_hal/peripheral/struct.PeripheralRef.html\" title=\"struct esp_idf_hal::peripheral::PeripheralRef\">PeripheralRef</a>&lt;'a, T&gt;"]],
"heapless":[["impl&lt;T, K, const N: usize&gt; Deref for <a class=\"struct\" href=\"heapless/binary_heap/struct.PeekMut.html\" title=\"struct heapless::binary_heap::PeekMut\">PeekMut</a>&lt;'_, T, K, N&gt;<span class=\"where fmt-newline\">where\n    T: Ord,\n    K: <a class=\"trait\" href=\"heapless/binary_heap/trait.Kind.html\" title=\"trait heapless::binary_heap::Kind\">Kind</a>,</span>"],["impl&lt;T, const N: usize&gt; Deref for <a class=\"struct\" href=\"heapless/struct.HistoryBuffer.html\" title=\"struct heapless::HistoryBuffer\">HistoryBuffer</a>&lt;T, N&gt;"],["impl&lt;const N: usize&gt; Deref for <a class=\"struct\" href=\"heapless/struct.String.html\" title=\"struct heapless::String\">String</a>&lt;N&gt;"],["impl&lt;P&gt; Deref for <a class=\"struct\" href=\"heapless/pool/singleton/arc/struct.Arc.html\" title=\"struct heapless::pool::singleton::arc::Arc\">Arc</a>&lt;P&gt;<span class=\"where fmt-newline\">where\n    P: <a class=\"trait\" href=\"heapless/pool/singleton/arc/trait.Pool.html\" title=\"trait heapless::pool::singleton::arc::Pool\">Pool</a>,</span>"],["impl&lt;T, Idx, K, const N: usize&gt; Deref for <a class=\"struct\" href=\"heapless/sorted_linked_list/struct.FindMut.html\" title=\"struct heapless::sorted_linked_list::FindMut\">FindMut</a>&lt;'_, T, Idx, K, N&gt;<span class=\"where fmt-newline\">where\n    T: Ord,\n    Idx: <a class=\"trait\" href=\"heapless/sorted_linked_list/trait.SortedLinkedListIndex.html\" title=\"trait heapless::sorted_linked_list::SortedLinkedListIndex\">SortedLinkedListIndex</a>,\n    K: <a class=\"trait\" href=\"heapless/sorted_linked_list/trait.Kind.html\" title=\"trait heapless::sorted_linked_list::Kind\">Kind</a>,</span>"],["impl&lt;P&gt; Deref for <a class=\"struct\" href=\"heapless/pool/singleton/struct.Box.html\" title=\"struct heapless::pool::singleton::Box\">Box</a>&lt;P&gt;<span class=\"where fmt-newline\">where\n    P: <a class=\"trait\" href=\"heapless/pool/singleton/trait.Pool.html\" title=\"trait heapless::pool::singleton::Pool\">Pool</a>,</span>"],["impl&lt;T&gt; Deref for <a class=\"struct\" href=\"heapless/pool/struct.Box.html\" title=\"struct heapless::pool::Box\">Box</a>&lt;T&gt;"],["impl&lt;T, const N: usize&gt; Deref for <a class=\"struct\" href=\"heapless/struct.Vec.html\" title=\"struct heapless::Vec\">Vec</a>&lt;T, N&gt;"]],
"uncased":[["impl Deref for <a class=\"struct\" href=\"uncased/struct.Uncased.html\" title=\"struct uncased::Uncased\">Uncased</a>&lt;'_&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()